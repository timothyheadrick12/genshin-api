import { Character } from "nexus-prisma";
import { objectType } from "nexus";

export const CharacterType = objectType({
  name: Character.$name,
  description: Character.$description,
  definition(t) {
    t.field(Character.id);
    // t.field(User.id.name, User.id)    <-- For nexus@=<1.0 users
  },
});
