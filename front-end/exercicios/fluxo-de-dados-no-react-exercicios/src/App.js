import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [posted, setPosted] = useState({});
  const [profile, setProfile] = useState({});

  const loginProfile = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header profile={profile} />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              name={name}
              setName={setName}
              photo={photo}
              setPhoto={setPhoto}
              loginProfile={loginProfile}
            />
          ) : (
            <FormularioPostagem
              title={title}
              setTitle={setTitle}
              img={img}
              setImg={setImg}
              description={description}
              setDescription={setDescription}
              sendPost={(newPost) => setPosted(newPost)}
            />
          )}
        </aside>
        <TelaDaPostagem posted={posted} />
      </Container>
    </>
  );
}

export default App;
