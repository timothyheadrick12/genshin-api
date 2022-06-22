import {PrismaClient} from '@prisma/client';
import {ApolloServer} from 'apollo-server';
import {schema} from './schema';

const prisma = new PrismaClient();

async function main() {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
  const allCharacters = await prisma.character.findMany();
  console.log(allCharacters);
}

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

const server = new ApolloServer({schema});
server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
