import logoNLW from "../../assets/Logo.svg";
export default function MainTitle() {
  return (
    <>
      <img src={logoNLW} alt="" />
      <h1 className="text-6xl text-white font-black mt-20 text-center">
        Seu<span className="text-transparent bg-duo-gradient bg-clip-text"> DUO </span>está aqui!
      </h1>
    </>
  );
}
