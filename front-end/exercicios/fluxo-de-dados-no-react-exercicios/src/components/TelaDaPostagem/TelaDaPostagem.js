import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({ posted }) => {
  return (
    <ContainerPostagem>
      <TitleHeader>{posted.title}</TitleHeader>
      <Image src={posted.img} />
      <Description>{posted.description}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
