import Main from "./Componentes/Main";
import Header from "./Componentes/Header";
import { GlobalStyle } from "./GlobalStyle";
import TelaInteira from "./Componentes/Tela";
import Footer from "./Componentes/Footer";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <TelaInteira>
        <Header />
        <Main />
        <Footer />
      </TelaInteira>
    </div>
  );
}
