import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function putRecipe(req, res) {
  const { title, url, imageUrl } = req.body;
  const newRecipe = await prisma.recipe.create({
    data: { url, title, imageUrl },
  });

  res.status(200).json(newRecipe);
}
