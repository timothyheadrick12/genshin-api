//   description String
//     level       Int?
//     name        String
//     unlock      String

import {objectType} from 'nexus';

export const PassiveTalent = objectType({
  name: 'CharacterPassiveTalent',
  definition(t) {
    t.field('name', {
      type: 'String',
    });
    t.field('level', {
      type: 'Int',
    });
    t.field('description', {
      type: 'String',
    });
    t.field('unlock', {
      type: 'String',
    });
  },
});
