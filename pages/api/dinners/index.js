import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function putDinnner(req, res) {
  const { recipe, date } = req.body;
  const newDinner = await prisma.dinner.create({
    data: { recipeId: recipe.id, dinnerAt: date },
  });

  res.status(200).json(newDinner);
}
