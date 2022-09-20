import { ImageBackground } from "react-native";
import { styles } from "./styles";

import backgroundImg from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      // source pressupoe um novo valor entao ele sempre vai procurar essa imagem de novo
      defaultSource={backgroundImg}
      // memoriza a imagem padrao e acelera o carregamento dela
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
