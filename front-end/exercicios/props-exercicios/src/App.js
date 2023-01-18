import React from "react";
import "./styles.css";
import CardVideo from "./components/CardVideo";

export default function App() {
  const video1 = {
    nome: "Título 1",
    imagem: "https://picsum.photos/400/400?a=1",
  };
  const video2 = {
    nome: "Título 2",
    imagem: "https://picsum.photos/400/400?a=2",
  };
  const video3 = {
    nome: "Título 3",
    imagem: "https://picsum.photos/400/400?a=3",
  };
  const video4 = {
    nome: "Título 4",
    imagem: "https://picsum.photos/400/400?a=4",
  };
  const video5 = {
    nome: "Título 5",
    imagem: "https://picsum.photos/400/400?a=5",
  };
  const video6 = {
    nome: "Título 6",
    imagem: "https://picsum.photos/400/400?a=6",
  };
  const video7 = {
    nome: "Título 7",
    imagem: "https://picsum.photos/400/400?a=7",
  };
  const video8 = {
    nome: "Título 8",
    imagem: "https://picsum.photos/400/400?a=8",
  };

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>
          <div className="painel-de-videos">
            <CardVideo video={video1} />
            <CardVideo video={video2} />
            <CardVideo video={video3} />
            <CardVideo video={video4} />
            <CardVideo video={video5} />
            <CardVideo video={video6} />
            <CardVideo video={video7} />
            <CardVideo video={video8} />
          </div>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
