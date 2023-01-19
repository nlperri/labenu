import { Carro } from "../Carro/Carro";
import {
  Botao,
  Estacionamento,
  GaragemContainer,
  Header,
  EstacionamentoContainer,
  Footer,
  TituloCarros,
} from "./style";

export function Garagem(props) {
  return (
    <GaragemContainer>
      <Header>Garagem da {props.nome}</Header>

      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>
      <EstacionamentoContainer>
        <TituloCarros>Garagem de Carros</TituloCarros>
        <Estacionamento>
          <Carro
            adicionadoPor={props.nome}
            cor={"Amarelo"}
            ano={2009}
            flex={"false"}
          />
        </Estacionamento>
        <Estacionamento>
          <Carro
            adicionadoPor={props.nome}
            cor={"Rosa"}
            ano={2022}
            flex={"true"}
          />
        </Estacionamento>
        <Estacionamento>
          <Carro
            adicionadoPor={props.nome}
            cor={"Rosa"}
            ano={2022}
            flex={"true"}
          />
        </Estacionamento>
        <Estacionamento>
          <Carro
            adicionadoPor={props.nome}
            cor={"Rosa"}
            ano={2022}
            flex={"true"}
          />
        </Estacionamento>
      </EstacionamentoContainer>
      <Footer>styled-components</Footer>
    </GaragemContainer>
  );
}
