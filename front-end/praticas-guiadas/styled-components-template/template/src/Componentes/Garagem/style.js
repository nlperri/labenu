import styled from "styled-components";

export const Botao = styled.button`
  border: 1px solid black;
  padding: 8px;
  background-color: #fb8b24;
  margin: 10px 0;

  :hover {
    background-color: #e36414;
    cursor: pointer;
    border: 1px solid black;
  }
`;

export const GaragemContainer = styled.main`
  background-color: #fbf8cc;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.header`
  height: 10vh;
  background-color: #fb8b24;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
  border-bottom: 2px solid black;
`;

export const Estacionamento = styled.section`
  background-color: #fb8b24;
  border: 2px solid black;
  border-radius: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

export const EstacionamentoContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, auto);
  gap: 20px;
  background-color: #84a98c;
  padding: 16px;
  border-radius: 20px;
  text-align: center;
  margin: ;
`;

export const Footer = styled.footer`
  height: 10vh;
  width: 100vw;
  background-color: #fb8b24;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-top: 2px solid black;
  position: fixed;
  bottom: 0;
`;

export const TituloCarros = styled.h2`
  grid-column: 1/3;
`;
