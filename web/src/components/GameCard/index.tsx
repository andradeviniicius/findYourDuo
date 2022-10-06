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
    <div className="relative rounded-lg overflow-hidden hover:scale-110 transition ease-in-out">
      <Link href={`/games/${gameId}`}>
        <a>
          <Image
            src={gameBanner.replace("{width}x{height}", "180x240")}
            width={180}
            height={240}
          />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">{gameTitle}</strong>
            <span className="text-zinc-300 text-sm block">
              {adsCount} Ad(s)
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}
