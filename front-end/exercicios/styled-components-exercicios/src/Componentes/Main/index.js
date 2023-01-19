import CardVideo from "../CardVideo";
import { MainContainer } from "./style";
import { MenuVertical } from "./style";
import { Lista } from "./style";
import { PainelDeVideos } from "./style";

const Main = () => {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem",
  };

  return (
    <MainContainer>
      <MenuVertical>
        <ul>
          <Lista>Início</Lista>
          <Lista>Em alta</Lista>
          <Lista>Inscrições</Lista>
          <hr />
          <Lista>Originais</Lista>
          <Lista>Histórico</Lista>
        </ul>
      </MenuVertical>

      <PainelDeVideos>
        <CardVideo
          image1={card1.imagemDoVideo}
          titulo={card1.titulo}
          textoAlternativo={card1.textoAlternativo}
        />
      </PainelDeVideos>
    </MainContainer>
  );
};

export default Main;
