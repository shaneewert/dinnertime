import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteRecipe(req, res) {
  const recipeId = parseInt(req.query.recipeId);
  await prisma.dinner.deleteMany({ where: { recipeId } });
  await prisma.recipe.delete({ where: { id: recipeId } });
  res.status(204).send();
}

async function updateRecipe(req, res) {
  const recipeId = parseInt(req.query.recipeId);
  const { title, url, imageUrl, description } = req.body;

  const updatedRecipe = await prisma.recipe.update({
    where: { id: recipeId },
    data: { url, title, imageUrl, description },
  });

  res.status(200).json(updatedRecipe);
}

export default async function endpoint(req, res) {
  if (req.method === 'DELETE') {
    await deleteRecipe(req, res);
  } else if (req.method === 'PUT') {
    await updateRecipe(req, res);
  } else {
    res.status(404).send();
  }
}
