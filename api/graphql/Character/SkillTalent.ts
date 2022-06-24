// description String
// name        String
// type        String?
// unlock      String
// upgrades    CharacterSkillTalentUpgrade[]

// name  String
// value String
import {objectType} from 'nexus';

export const SkillTalentUpgrade = objectType({
  name: 'CharacterSkillTalentUpgrade',
  definition(t) {
    t.field('name', {
      type: 'String',
    });
    t.field('value', {
      type: 'String',
    });
  },
});

export const SkillTalent = objectType({
  name: 'CharacterSkillTalent',
  definition(t) {
    t.field('name', {
      type: 'String',
    });
    t.field('description', {
      type: 'String',
    });
    t.field('type', {
      type: 'String',
    });
    t.field('unlock', {
      type: 'String',
    });
    t.list.field('upgrades', {
      type: SkillTalentUpgrade,
    });
  },
});
