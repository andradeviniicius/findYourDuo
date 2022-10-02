import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function handler(req: any, res: any) {
  const { gameId } = req.query;
  async function main() {
    await prisma.$connect();
    const games = await prisma.games.findUniqueOrThrow({
      where: {
        id: gameId,
      },
    });
    res.json(games);
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
