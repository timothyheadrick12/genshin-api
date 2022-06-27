import {Prisma} from '@prisma/client';
import {arg, inputObjectType} from 'nexus';

export const FilterInputType = inputObjectType({
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

export const FilterLogicInputType = inputObjectType({
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

export const filterArgs = {
  filter: arg({type: FilterInputType}),
  lFilter: arg({type: FilterLogicInputType}),
};

//This should be adapted to work on embedded types
export const filterResolver = (
  args: any
): Prisma.CharacterWhereInput | undefined => {
  if (args.lFilter) {
    return {
      AND: (() => {
        if (args.lFilter!.AND) {
          return args.lFilter!.AND.map((filter: any) => {
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
          return args.lFilter!.OR.map((filter: any) => {
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
          return args.lFilter!.NOT.map((filter: any) => {
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
};
