import { TitleHeader } from "./styled";
import { Profile } from "./styled";

export const Header = ({ profile }) => {
  return (
    <TitleHeader>
      <Profile>
        <img src={profile.photo} />
        <p>{profile.name}</p>
      </Profile>
      <h1>Insta4</h1>
    </TitleHeader>
  );
};
