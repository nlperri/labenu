import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>LabeTube</h1>
      <input type="text" placeholder="Busca" id="campoDeBusca" />
    </HeaderContainer>
  );
};

export default Header;
