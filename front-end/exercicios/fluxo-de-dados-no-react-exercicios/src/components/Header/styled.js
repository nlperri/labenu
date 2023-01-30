import styled from "styled-components";

export const TitleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  gap: 20px;

  h1 {
    font-size: 32px;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 100%;
    width: 50px;
  }

  p {
    font-size: 20px;
  }
`;
