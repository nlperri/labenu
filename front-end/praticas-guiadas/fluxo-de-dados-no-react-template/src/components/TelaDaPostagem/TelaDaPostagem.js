import React from "react";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({ urlPhoto, description, title }) => {
  return (
    <ContainerPostagem>
      <Image src={urlPhoto} alt={description} />
      <h2>{title}</h2>
      <Description>{description}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
