import {PrismaClient} from '@prisma/client';
import {extendType} from 'nexus';
import {filterArgs, filterResolver} from '../filter';
import {sortArgs, sortResolver} from '../sort';

const prisma = new PrismaClient();

export const ArtifactQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('artifact', {
      type: 'Artifact',
      args: {
        ...sortArgs,
        ...filterArgs,
      },
      resolve: (root, args) =>
        prisma.artifact.findFirst({
          where: filterResolver(args),
          orderBy: sortResolver(args),
        }),
    });
    t.connectionField('artifacts', {
      type: 'Artifact',
      additionalArgs: {
        ...sortArgs,
        ...filterArgs,
      },
      cursorFromNode: (node) => (node ? node.id : ''),
      nodes: (root, args, ctx, info) =>
        prisma.artifact.findMany({
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
