import Image from "next/image";
import Link from "next/link";

type Props = {
  gameBanner: string;
  gameTitle: string;
  gameId: any;
  adsCount?: string;
};

export default function GameCard({
  gameBanner,
  gameTitle,
  gameId,
  adsCount,
}: Props) {
  return (
    <div
      className="carousel-item text-center relative w-[180] h-60 snap-start"
    >
      <div
        className="h-full w-full aspect-[3/4] block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "
      >
        <Link href={`/games/${gameId}`}>
          <a>
            <Image
              src={gameBanner.replace("{width}x{height}", "180x240")}
              width={180}
              height={240}
              className="hover:scale-105 transition ease-in-out"
            />

            <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                {gameTitle}
              </strong>
              <span className="text-zinc-300 text-sm block">
                {adsCount} Ad(s)
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
