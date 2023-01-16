import "./App.css";
import logo from "./img/logo.png";

function App() {
  //tudo de lógica vem aqui, antes do return
  const onClickBotao = () => {
    alert("Botão foi clicado!");
  };
  return (
    <div className="container">
      <h1>Aprenda React na Labenu!</h1>
      <img className="Logo" src={logo} alt="logo" />

      <div>
        <a href="https://labenu.com.br" target="_blank" rel="noreferrer">
          Site da Labenu
        </a>
      </div>
      <div>
        <button onClick={onClickBotao}>Clique aqui!</button>
      </div>
    </div>
  );
}

export default App;
