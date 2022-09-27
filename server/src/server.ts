import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import convertHourStringToMinutes from "./utils/convertHourStringToMinutes";
import { convertMinutesToHourString } from "./utils/convertMinuteStringToHours";

const app = express();

app.use(express.json());
app.use(cors());

// Security example
// app.use(cors({ origin: "http://findyourduo.com.br" }));

const prisma = new PrismaClient({ log: ["query"] });

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return res.json(games);
});

app.post("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const body = req.body;

  // use zod to validate data - later

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(","),
      hoursStart: convertHourStringToMinutes(body.hoursStart),
      HoursEnd: convertHourStringToMinutes(body.HoursEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return res.status(201).json(ad);
});

app.get("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      createdAt: true,
      game: true,
      gameId: true,
      HoursEnd: true,
      hoursStart: true,
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hoursStart: convertMinutesToHourString(ad.hoursStart),
        HoursEnd: convertMinutesToHourString(ad.HoursEnd),
      };
    })
  );
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;
  const discord = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json(discord);
});

app.listen(3333);
