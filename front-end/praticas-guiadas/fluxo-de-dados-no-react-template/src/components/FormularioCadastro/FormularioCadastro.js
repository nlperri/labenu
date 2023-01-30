import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ({
  urlPhoto,
  setUrlPhoto,
  description,
  setDescription,
  title,
  setTitle,
}) => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
            onChange={(e) => {
              setUrlPhoto(e.target.value);
            }}
            value={urlPhoto}
            id="foto"
          />
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            id="titulo"
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            id="descricao"
          />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
