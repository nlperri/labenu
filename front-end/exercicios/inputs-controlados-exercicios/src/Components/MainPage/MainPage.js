import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [formFlow, setFormFlow] = useState(1);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeConfirmEmail = (event) => {
    setConfirmEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendData = () => {
    if (
      age >= 18 &&
      name.length >= 10 &&
      name.length <= 30 &&
      email === confirmEmail &&
      name != "" &&
      age != "" &&
      email != "" &&
      confirmEmail != "" &&
      validateEmail(email) &&
      validateEmail(confirmEmail)
    ) {
      setFormFlow(2);
    } else {
      alert("Usuário não respondeu o formulário corretamente");
    }
  };
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          name={name}
          age={age}
          email={email}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          onChangeEmail={onChangeEmail}
          sendData={sendData}
          confirmEmail={confirmEmail}
          onChangeConfirmEmail={onChangeConfirmEmail}
        />
      ) : (
        <ConfirmationForm />
      )}
    </MainContainer>
  );
};

export default MainPage;
