import React from "react";

export default function InfosUsuario(props) {
  console.log(props.info.imagem);
  return (
    <div className="info">
      <img src={props.info.imagem} />
      <p>{props.info.nome}</p>
    </div>
  );
}
