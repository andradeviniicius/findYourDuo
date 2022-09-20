import logoNLW from "../../assets/Logo.svg";
export default function MainTitle() {
  return (
    <>
      <img src={logoNLW} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Your<span className="text-transparent bg-duo-gradient bg-clip-text"> DUO </span>is here!
      </h1>
    </>
  );
}
