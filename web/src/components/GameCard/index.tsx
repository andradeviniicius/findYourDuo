import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  gameBanner: string;
  gameTitle: string;
  gameId: any;
  adsCount?: number;
};

export default function GameCard({
  gameBanner,
  gameTitle,
  gameId,
  adsCount,
}: Props) {
  const router = useRouter();
  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      transition={{ delay: .7 }}
    >
      <div className="carousel-item text-center relative w-[180] h-48 snap-start hover:cursor-pointer hover:scale-105 transition ease-in-out">
        <a
          onClick={() => router.push(`/games/${gameId}`)}
          className="h-full w-full aspect-[3/4] block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 "
        >
          <Image
            src={gameBanner.replace("{width}x{height}", "180x240")}
            width={180}
            height={240}
            className=""
          />

          <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block text-xs">
              {gameTitle}
            </strong>
            <span className="text-zinc-300 text-xs block">
              {adsCount
                ? `${adsCount} ${
                    adsCount === 1 ? "Pessoa aguardando" : "Pessoas aguardando"
                  }`
                : ""}
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
1;
