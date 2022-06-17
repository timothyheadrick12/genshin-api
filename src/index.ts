import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
  const allCharacters = await prisma.characters.findMany();
  console.log(allCharacters);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
