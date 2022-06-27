import {PrismaClient} from '@prisma/client';
import {extendType} from 'nexus';
import {filterArgs, filterResolver} from '../filter';
import {sortArgs, sortResolver} from '../sort';

const prisma = new PrismaClient();

export const CharacterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('character', {
      type: 'Character',
      args: {
        ...sortArgs,
        ...filterArgs,
      },
      resolve: (root, args) =>
        prisma.character.findFirst({
          where: filterResolver(args),
          orderBy: sortResolver(args),
        }),
    });
    t.connectionField('characters', {
      type: 'Character',
      additionalArgs: {
        ...sortArgs,
        ...filterArgs,
      },
      cursorFromNode: (node) => (node ? node.id : ''),
      nodes: (root, args, ctx, info) =>
        prisma.character.findMany({
          cursor: args.after
            ? {
                id: args.after,
              }
            : undefined,
          where: filterResolver(args),
          orderBy: sortResolver(args),
        }),
    });
  },
});
