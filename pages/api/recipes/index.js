import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function putRecipe(req, res) {
  const { title, url, imageUrl, description } = req.body;
  const newRecipe = await prisma.recipe.create({
    data: { url, title, imageUrl, description },
  });

  res.status(201).json(newRecipe);
}
