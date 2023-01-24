import { Garagem } from "./Componentes/Garagem";
import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";

export default function App() {
  //Declarar o estado
  const [nome, setnome] = useState("Labenu");

  const mudaNome = () => {
    setnome("Conway");
  };

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} mudaNome={mudaNome} />
    </div>
  );
}
