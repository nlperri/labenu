import { TelaInteiraContainer } from "./style";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";

const TelaInteira = () => {
  return (
    <TelaInteiraContainer>
      <Header />
      <Main />
      <Footer />
    </TelaInteiraContainer>
  );
};

export default TelaInteira;
