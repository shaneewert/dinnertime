import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteDinner(req, res) {
  const dinnerId = parseInt(req.query.dinnerId);
  await prisma.dinner.delete({ where: { id: dinnerId } });
  res.status(204).send();
}

export default async function endpoint(req, res) {
  if (req.method === 'DELETE') {
    await deleteDinner(req, res);
  } else {
    res.status(404).send();
  }
}
