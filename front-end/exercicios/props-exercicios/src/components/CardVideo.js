import React from "react";
import InfosUsuario from "./InfosUsuario";

export default function CardVideo(props) {
  const info = {
    nome: "Usuário 1",
    imagem: "https://i.pravatar.cc/150?img=1",
  };

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.video.imagem} alt="" />

      <h4>{props.video.nome}</h4>
      <InfosUsuario info={info} />
    </div>
  );
}
