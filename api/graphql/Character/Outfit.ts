// description String
// image       String
// name        String
// price       Int
// rarity      Int
// type        String

import {objectType} from 'nexus';

export const Outfit = objectType({
  name: 'CharacterOutfit',
  definition(t) {
    t.field('name', {
      type: 'String',
    });
    t.field('image', {
      type: 'String',
    });
    t.field('description', {
      type: 'String',
    });
    t.field('type', {
      type: 'String',
    });
    t.field('rarity', {
      type: 'Int',
    });
    t.field('price', {
      type: 'Int',
    });
  },
});
