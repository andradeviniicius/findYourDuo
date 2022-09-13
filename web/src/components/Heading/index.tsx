import "./styles.css";

interface HeadingProps {
  title: string;
}

export default function Heading(props: HeadingProps) {
  return (
    <>
      <h1 className="mainHeading">
        Seu
        <span
          style={{
            backgroundImage: "linear-gradient(90deg, red, blue)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          duo
        </span>
        está aqui
      </h1>
    </>
  );
}
