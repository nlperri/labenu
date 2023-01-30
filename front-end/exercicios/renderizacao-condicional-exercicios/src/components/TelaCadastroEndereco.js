import { FormContainer } from "./TelaLogin/styled";
import { Form } from "./TelaLogin/styled";
import { StyledLabel } from "./TelaLogin/styled";
import { Input } from "./TelaLogin/styled";
import { SendButton } from "./TelaLogin/styled";
const TelaCadastroEndereco = ({ mudarTela }) => {
  return (
    <FormContainer>
      <h1>Cadastro endereço </h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numero">
          Número da residência:
          <Input id="numero" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input id="telefone" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton
          onClick={() => {
            mudarTela(4);
          }}
        >
          Cadastrar
        </SendButton>
      </Form>
    </FormContainer>
  );
};

export default TelaCadastroEndereco;
