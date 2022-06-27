// circlet_of_logos   String @map("circlet-of-logos")
//   flower_of_life     String @map("flower-of-life")
//   goblet_of_eonothem String @map("goblet-of-eonothem")
// plume_of_death     String @map("plume-of-death")
// sands_of_eon       String @map("sands-of-eon")

import {objectType} from 'nexus';

export const Images = objectType({
  name: 'ArtifactImages',
  definition(t) {
    t.string('circlet_of_logos');
    t.string('flower_of_life');
    t.string('goblet_of_eonothem');
    t.string('plume_of_death');
    t.string('sands_of_eon');
  },
});
