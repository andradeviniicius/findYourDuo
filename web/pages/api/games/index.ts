import convertHourStringToMinutes from "../utils/convertHourStringToMinutes";
import convertMinutesToHourString from "../utils/convertMinuteStringToHours";


export default function handler(req: any, res: any) {
  // buscar games no mongodb
  res.json("games");
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
