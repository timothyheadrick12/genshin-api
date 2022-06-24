import {objectType} from 'nexus';
import {Character} from 'nexus-prisma';
import {Constellation} from './Constellation';
import {Images} from './Images';
import {Outfit} from './Outfit';
import {PassiveTalent} from './PassiveTalent';
import {SkillTalent} from './SkillTalent';

//NOTE: Embedded types do not casted by the prisma resolver
// using  their given name in the schema, they are caster
// using their name in the mongodb database. So, you have
// to set the field name to their name in the mongodb database

export const CharacterType = objectType({
  name: Character.$name,
  description: Character.$description,
  definition(t) {
    t.field(Character.id);
    t.field(Character.name);
    t.field(Character.affiliation);
    t.field(Character.birthday);
    t.field(Character.constellation);
    t.list.field('constellations', {
      type: Constellation,
    });
    t.field(Character.description);
    t.field(Character.gender);
    t.field('images', {
      type: Images,
    });
    t.field(Character.nation);
    t.list.field('outfits', {
      type: Outfit,
    });
    t.list.field('passiveTalents', {
      type: PassiveTalent,
    });
    t.field(Character.rarity);
    t.list.field('skillTalents', {
      type: SkillTalent,
    });
    t.field(Character.specialDish);
    t.field(Character.title);
    t.field(Character.vision);
    t.field(Character.vision_key);
    t.field(Character.weapon);
    t.field(Character.weapon_type);
  },
});
