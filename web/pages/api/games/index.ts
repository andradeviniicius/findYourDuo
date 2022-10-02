import { PrismaClient } from "@prisma/client";

import convertHourStringToMinutes from "../utils/convertHourStringToMinutes";
import convertMinutesToHourString from "../utils/convertMinuteStringToHours";
const prisma = new PrismaClient();

export default function handler(req: any, res: any) {
  async function main() {
    await prisma.$connect();
    const games = await prisma.games.findMany();
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

// export default async function games/:id/ads(req, res) {

//   // Criar um anuncio com as infos:
//   // data: {
//     //   gameId,
//     //   name: body.name,
//     //   yearsPlaying: body.yearsPlaying,
//     //   discord: body.discord,
//     //   weekDays: body.weekDays.join(","),
//     //   hoursStart: convertHourStringToMinutes(body.hoursStart),
//     //   HoursEnd: convertHourStringToMinutes(body.HoursEnd),
//     //   useVoiceChannel: body.useVoiceChannel,
//     // },

//   return res.status(201).json("createAd");
// }
// export default async function games/:id/ads(req, res) {

//   // Pegar anuncio de tal jogo

//   return res.status(201).json("searchAdByGame");
// }
