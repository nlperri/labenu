import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ({
  setPageFlow,
  photo,
  setPhoto,
  name,
  setName,
  loginProfile,
}) => {
  const login = () => {
    loginProfile({
      name,
      photo,
    });
    setPageFlow(2);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type={"text"}
          />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
            value={photo}
            onChange={(e) => {
              setPhoto(e.target.value);
            }}
            type={"text"}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
