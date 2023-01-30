import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";

function TelaCadastro({ handleTela }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const sendCadastro = () => {
    if (
      nome.length != 0 &&
      email.length != 0 &&
      senha.length != 0 &&
      confirmSenha.length != 0
    ) {
      handleTela(3);
    } else {
      alert("Preencha o formulário para prosseguir");
    }
  };
  return (
    <FormContainer>
      <h1>Cadastro </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            id="titulo"
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="foto"
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            id="descricao"
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            id="descricao"
          />
        </StyledLabel>
        <SendButton onClick={sendCadastro}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => handleTela(1)}>
          Já possuo um cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
