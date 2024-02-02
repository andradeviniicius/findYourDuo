import logoNLW from "../../assets/Logo.svg";
import Image from "next/image";
export default function MainTitle() {
  return (
    <>
      <Image priority src={logoNLW} alt="" width={'128px'} height={'128px'} />
      <h1 className="text-5xl text-white font-black mt-14 text-center">
        Seu<span className="text-transparent bg-duo-gradient bg-clip-text"> DUO </span>está aqui !
      </h1>
    </>
  );
}
