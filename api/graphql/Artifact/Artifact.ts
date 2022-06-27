import {objectType} from 'nexus';
import {Artifact} from 'nexus-prisma';
import {Images} from './Images';

export const ArtifactType = objectType({
  name: Artifact.$name,
  description: Artifact.$description,
  definition(t) {
    t.field(Artifact.id);
    t.field(Artifact.name);
    t.field(Artifact.image);
    t.field('images', {
      type: Images,
    });
    t.field(Artifact.max_rarity);
    t.field(Artifact.piece_bonus_1);
    t.field(Artifact.piece_bonus_2);
    t.field(Artifact.piece_bonus_4);
  },
});
