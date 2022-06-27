import {arg, inputObjectType} from 'nexus';

export const SortInputType = inputObjectType({
  name: 'SortInputType',
  definition(t) {
    t.nonNull.string('field');
    t.nonNull.boolean('asc');
  },
});

export const sortArgs = {
  sort: arg({type: SortInputType, default: undefined}),
};

export const sortResolver = (args: any) =>
  args.sort ? {[args.sort.field]: args.sort.asc ? 'asc' : 'desc'} : undefined;
