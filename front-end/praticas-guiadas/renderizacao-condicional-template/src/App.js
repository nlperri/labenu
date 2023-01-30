import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [condicional, setCondicional] = useState(1);

  const handleTela = (number) => {
    setCondicional(number);
  };

  const handleTelaInicial = () => {
    switch (condicional) {
      case 1:
        return <TelaLogin handleTela={handleTela} />;
      case 2:
        return <TelaCadastro handleTela={handleTela} />;
      case 3:
        return <TelaUsuarioCadastrado />;
    }
    // if (condicional === 1) {
    //   return <TelaLogin handleTela={handleTela} />;
    // } else if (condicional === 2) {
    //   return <TelaCadastro handleTela={handleTela} />;
    // } else {
    //   return <TelaUsuarioCadastrado />;
    // }
  };
  return (
    <MainContainer>
      <GlobalStyled />
      {handleTelaInicial()}
    </MainContainer>
  );
}

export default App;
