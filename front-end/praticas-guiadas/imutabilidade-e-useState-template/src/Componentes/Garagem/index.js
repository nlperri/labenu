import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";
import { useState } from "react";

export function Garagem({ nome, mudaNome }) {
  const [carro, setCarro] = useState({
    modelo: "Fusca",
    cor: "rosa",
    ano: "1993",
    flex: false,
    adicionadoPor: "Conway",
  });

  const [carro2, setCarro2] = useState({
    modelo: "Fiesta",
    cor: "branco",
    ano: 2002,
    adicionadoPor: "Clara",
    flex: true,
  });

  const [carro3, setCarro3] = useState({
    modelo: "Celta",
    cor: "preto",
    ano: 2010,
    adicionadoPor: "Natália",
    flex: false,
  });

  const [carro4, setCarro4] = useState({
    modelo: "Uno",
    cor: "vermelho",
    ano: 2017,
    adicionadoPor: "Daniel",
    flex: true,
  });

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={carro.modelo}
          cor={carro.cor}
          ano={carro.ano}
          adicionadoPor={carro.adicionadoPor}
          flex={carro.flex}
          setCarro={setCarro}
          novoCarro={carro2}
        />
        <Carro
          modelo={carro2.modelo}
          cor={carro2.cor}
          ano={carro2.ano}
          adicionadoPor={carro2.adicionadoPor}
          flex={carro2.flex}
          setCarro={setCarro2}
          novoCarro={carro3}
        />
        <Carro
          modelo={carro3.modelo}
          cor={carro3.cor}
          ano={carro3.ano}
          adicionadoPor={carro3.adicionadoPor}
          flex={carro3.flex}
          setCarro={setCarro3}
          novoCarro={carro4}
        />
        <Carro
          modelo={carro4.modelo}
          cor={carro4.cor}
          ano={carro4.ano}
          adicionadoPor={carro4.adicionadoPor}
          flex={carro4.flex}
          setCarro={setCarro4}
          novoCarro={carro}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
