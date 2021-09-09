// to seed the DB, run `node prisma/seeds.js`

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.recipe.create({
    data: {
      url: 'http://recipe.com',
      title: 'Good eggs ' + Math.floor(Math.random() * 100),
      familyId: 1,
    },
  });

  const allRecipes = await prisma.recipe.findMany({
    where: { familyId: 1 },
  });
  console.dir(allRecipes, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
