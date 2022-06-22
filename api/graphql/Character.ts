import {PrismaClient} from '@prisma/client';
import {Character} from 'nexus-prisma';
import {objectType, extendType, enumType, arg, stringArg} from 'nexus';
import {NexusGenArgTypes} from '../../nexus-typegen';

const prisma = new PrismaClient();

export const CharacterType = objectType({
  name: Character.$name,
  description: Character.$description,
  definition(t) {
    t.field(Character.id);
    t.field(Character.name);
    t.field(Character.affiliation);
    t.field(Character.birthday);
    t.field(Character.constellation);
    // t.field(Character.constellations);
    t.field(Character.description);
    t.field(Character.gender);
    // t.field(Character.images);
    t.field(Character.nation);
    // t.field(Character.outfits);
    // t.field(Character.passiveTalents);
    t.field(Character.rarity);
    // t.field(Character.skillTalents);
    t.field(Character.specialDish);
    t.field(Character.title);
    t.field(Character.vision);
    t.field(Character.vision_key);
    t.field(Character.weapon);
    t.field(Character.weapon_type);
  },
});

const SortEnum = enumType({
  name: 'SortEnum',
  members: {
    ID_ASC: {id: 'asc'},
    ID_DESC: {id: 'desc'},
    AFFILIATION_ASC: {affiliation: 'asc'},
    AFFILIATION_DESC: {affiliation: 'desc'},
    BIRTHDAY_ASC: {birthday: 'asc'},
    BIRTHDAY_DESC: {birthday: 'desc'},
    CONSTELLATION_ASC: {constellation: 'asc'},
    CONSTELLATION_DESC: {constellation: 'desc'},
    GENDER_ASC: {gender: 'asc'},
    GENDER_DESC: {gender: 'desc'},
  },
});

export const CharacterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('character', {
      type: 'Character',
      args: {
        sort: arg({type: SortEnum, default: undefined}),
      },
      resolve: (root, args) =>
        prisma.character.findFirst({
          orderBy: args.sort ?? undefined,
        }),
    });
    t.connectionField('characters', {
      type: 'Character',
      additionalArgs: {
        sort: arg({type: SortEnum}),
      },
      cursorFromNode: (node) => (node ? node.id : ''),
      nodes: (root, args, ctx, info) =>
        prisma.character.findMany({
          cursor: args.after
            ? {
                id: args.after,
              }
            : undefined,
          orderBy: args.sort ?? undefined,
        }),
    });
  },
});

export default CharacterQuery;
