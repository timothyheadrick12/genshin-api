import {Prisma, PrismaClient} from '@prisma/client';
import {arg, enumType, extendType, inputObjectType} from 'nexus';

const prisma = new PrismaClient();

const SortInputType = inputObjectType({
  name: 'SortInputType',
  definition(t) {
    t.nonNull.string('field');
    t.nonNull.boolean('asc');
  },
});

//This should somehow be moved to be universal because
//it should work as such. This should also be adapted
//to work on embedded types
const FilterInputType = inputObjectType({
  name: 'FilterInputType',
  definition(t) {
    t.nonNull.string('field');
    t.string('operator');
    t.string('string');
    t.list.string('strings');
    t.int('int');
    t.list.int('ints');
  },
});

const FilterLogicInputType = inputObjectType({
  name: 'FilterLogicInputType',
  definition(t) {
    t.list.field('AND', {
      type: FilterInputType,
    });
    t.list.field('OR', {
      type: FilterInputType,
    });
    t.list.field('NOT', {
      type: FilterInputType,
    });
  },
});

export const CharacterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('character', {
      type: 'Character',
      args: {
        sort: arg({type: SortInputType, default: undefined}),
        filter: arg({type: FilterInputType}),
        lFilter: arg({type: FilterLogicInputType}),
      },
      resolve: (root, args) =>
        prisma.character.findFirst({
          where: ((): Prisma.CharacterWhereInput | undefined => {
            if (args.lFilter) {
              return {
                AND: (() => {
                  if (args.lFilter!.AND) {
                    return args.lFilter!.AND.map((filter) => {
                      return {
                        [filter!.field]: {
                          [filter!.operator ?? 'equals']:
                            filter!.string ??
                            filter!.int ??
                            filter!.strings ??
                            filter!.ints,
                        },
                      };
                    });
                  }
                  return undefined;
                })(),
                OR: (() => {
                  if (args.lFilter!.OR) {
                    return args.lFilter!.OR.map((filter) => {
                      return {
                        [filter!.field]: {
                          [filter!.operator ?? 'equals']:
                            filter!.string ??
                            filter!.int ??
                            filter!.strings ??
                            filter!.ints,
                        },
                      };
                    });
                  }
                  return undefined;
                })(),
                NOT: (() => {
                  if (args.lFilter!.NOT) {
                    return args.lFilter!.NOT.map((filter) => {
                      return {
                        [filter!.field]: {
                          [filter!.operator ?? 'equals']:
                            filter!.string ??
                            filter!.int ??
                            filter!.strings ??
                            filter!.ints,
                        },
                      };
                    });
                  }
                  return undefined;
                })(),
              };
            } else if (args.filter) {
              return {
                [args.filter!.field]: {
                  [args.filter!.operator ?? 'equals']:
                    args.filter!.string ??
                    args.filter!.int ??
                    args.filter!.strings ??
                    args.filter!.ints,
                },
              };
            } else {
              return undefined;
            }
          })(),
          orderBy: args.sort
            ? {[args.sort.field]: args.sort.asc ? 'asc' : 'desc'}
            : undefined,
        }),
    });
    t.connectionField('characters', {
      type: 'Character',
      additionalArgs: {
        sort: arg({type: SortInputType}),
        filter: arg({type: FilterInputType}),
        lFilter: arg({type: FilterLogicInputType}),
      },
      cursorFromNode: (node) => (node ? node.id : ''),
      nodes: (root, args, ctx, info) =>
        prisma.character.findMany({
          cursor: args.after
            ? {
                id: args.after,
              }
            : undefined,
          where: ((): Prisma.CharacterWhereInput | undefined => {
            if (args.lFilter) {
              return {
                AND: (() => {
                  if (args.lFilter!.AND) {
                    return args.lFilter!.AND.map((filter) => {
                      return {
                        [filter!.field]: {
                          [filter!.operator ?? 'equals']:
                            filter!.string ??
                            filter!.int ??
                            filter!.strings ??
                            filter!.ints,
                        },
                      };
                    });
                  }
                  return undefined;
                })(),
                OR: (() => {
                  if (args.lFilter!.OR) {
                    return args.lFilter!.OR.map((filter) => {
                      return {
                        [filter!.field]: {
                          [filter!.operator ?? 'equals']:
                            filter!.string ??
                            filter!.int ??
                            filter!.strings ??
                            filter!.ints,
                        },
                      };
                    });
                  }
                  return undefined;
                })(),
                NOT: (() => {
                  if (args.lFilter!.NOT) {
                    return args.lFilter!.NOT.map((filter) => {
                      return {
                        [filter!.field]: {
                          [filter!.operator ?? 'equals']:
                            filter!.string ??
                            filter!.int ??
                            filter!.strings ??
                            filter!.ints,
                        },
                      };
                    });
                  }
                  return undefined;
                })(),
              };
            } else if (args.filter) {
              return {
                [args.filter!.field]: {
                  [args.filter!.operator ?? 'equals']:
                    args.filter!.string ??
                    args.filter!.int ??
                    args.filter!.strings ??
                    args.filter!.ints,
                },
              };
            } else {
              return undefined;
            }
          })(),
          orderBy: args.sort
            ? {[args.sort.field]: args.sort.asc ? 'asc' : 'desc'}
            : undefined,
        }),
    });
  },
});
