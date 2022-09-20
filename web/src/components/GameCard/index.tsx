type Props = {
  gameBanner: string,
  gameTitle: string,
  adsCount: string,
}

export default function GameCard({gameBanner, gameTitle, adsCount}:Props) {
  return (
    <>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src={gameBanner} alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">{gameTitle}</strong>
          <span className="text-zinc-300 text-sm block">
            {adsCount} Ad(s)
          </span>
        </div>
      </a>
    </>
  );
}
