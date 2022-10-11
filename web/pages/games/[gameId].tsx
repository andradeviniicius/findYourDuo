import { useRouter } from "next/router";
import { Carousel, AdCard } from "../../src/components";

export default function GameAdsPage() {
  const router = useRouter();
  const { gameId } = router.query;
  const fakeAds = [
    {
      id: 1,
      name: "Xurupa",
      timePlaying: 4,
      daysOfWeek: [1, 3, 5],
      hourStart: [1040],
      hourEnd: [1400],
      voiceCall: true,
    },
    {
      id: 2,
      name: "Loyde",
      timePlaying: 43,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: false,
    },
    {
      id: 3,
      name: "Nick",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: true,
    },
    {
      id: 4,
      name: "King",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: true,
    },
    {
      id: 5,
      name: "Berne",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: true,
    },
    {
      id: 6,
      name: "Raphox",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: true,
    },
    {
      id: 7,
      name: "Fera",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: true,
    },
    {
      id: 8,
      name: "Toddy",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: true,
    },
    {
      id: 9,
      name: "Berne",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: true,
    },
    {
      id: 10,
      name: "Berne",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1040,
      hourEnd: 1400,
      voiceCall: true,
    },
    {
      id: 11,
      name: "Berne",
      timePlaying: 4,
      daysOfWeek: [0, 4, 5],
      hourStart: 1180,
      hourEnd: 1400,
      voiceCall: true,
    },
  ];
  return (
    <>
      {/* Use IGDB API To get game info */}
      <h1 className="text-6xl text-white font-black mt-20 text-center">
        {gameId}
      </h1>
      <h2 className="text-6xl text-white font-black mt-20 text-center">
        <span className="text-transparent bg-duo-gradient bg-clip-text">
          Conecte-se
        </span>{" "}
        e comece a jogar!
      </h2>
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel>
          {fakeAds.map((el, index) => {
            return (
              <AdCard
                adId={el.id}
                userName={el.name}
                timePlaying={el.timePlaying}
                daysOfWeek={el.daysOfWeek}
                hourStart={el.hourStart}
                hourEnd={el.hourEnd}
                voiceCall={el.voiceCall}
                key={index}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
