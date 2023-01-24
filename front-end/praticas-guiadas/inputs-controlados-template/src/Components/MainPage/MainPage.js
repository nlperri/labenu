import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const clearInputs = (event) => {
    event.preventDefault();
    setInputName("");
    setInputAge("");
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input
            onChange={(event) => {
              setInputName(event.target.value);
            }}
            value={inputName}
          />
        </label>
        <label>Idade:</label>
        <Input
          onChange={(event) => {
            setInputAge(event.target.value);
          }}
          value={inputAge}
          type="number"
        />
        <label>Email:</label>
        <Input
          value={inputEmail}
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
          type="email"
        />
        <label>Senha:</label>
        <Input
          value={inputPassword}
          onChange={(event) => {
            setInputPassword(event.target.value);
          }}
          type="password"
        />
        <button onClick={clearInputs}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
