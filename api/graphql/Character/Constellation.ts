import {objectType} from 'nexus';

export const Constellation = objectType({
  name: 'CharacterConstellation',
  definition(t) {
    t.field('name', {
      type: 'String',
      description: 'The name of this constellation.',
    });
    t.field('description', {
      type: 'String',
      description: 'Description of this constellation.',
    });
    t.field('unlock', {
      type: 'String',
      description: 'Item required to unlock this constellation.',
    });
    t.field('level', {
      type: 'Int',
      description: 'Level of this constellation.',
    });
  },
});
