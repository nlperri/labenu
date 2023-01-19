import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: 80%;
  display: flex;
`;

export const MenuVertical = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;

export const Lista = styled.li`
  list-style-type: none;
`;

export const PainelDeVideos = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;
