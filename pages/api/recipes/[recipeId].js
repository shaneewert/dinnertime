import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteRecipe(req, res) {
  const recipeId = parseInt(req.query.recipeId);
  await prisma.recipe.delete({ where: { id: recipeId } });
  res.status(204).send();
}

export default async function endpoint(req, res) {
  if (req.method === 'DELETE') {
    await deleteRecipe(req, res);
  } else {
    res.status(404).send();
  }
}
