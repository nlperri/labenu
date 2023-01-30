import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({
  title,
  setTitle,
  img,
  setImg,
  description,
  setDescription,
  sendPost,
}) => {
  const post = () => {
    sendPost({
      title,
      img,
      description,
    });
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="titulo"
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
            id="foto"
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="descricao"
          />
        </StyledLabel>
      </Form>
      <SendButton onClick={post}>Enviar postagem</SendButton>
    </FormContainer>
  );
};

export default FormularioCadastro;
