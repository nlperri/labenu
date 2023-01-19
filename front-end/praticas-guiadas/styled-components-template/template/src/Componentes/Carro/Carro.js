import { Li, Lista, Titulo } from "./style";

export function Carro(props) {
  return (
    <div>
      <Titulo>Meu carro</Titulo>
      <Lista>
        <Li>Cor: {props.cor}</Li>
        <Li>Ano: {props.ano}</Li>
        <Li>Flex: {props.flex}</Li>
        <Li>Adicionado: {props.adicionadoPor}</Li>
      </Lista>
    </div>
  );
}
