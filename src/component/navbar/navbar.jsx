import * as S from "./navbar.style";

const Navbar = ({ children }) => {
  return (
    <S.Navbar>
      <a href='https://www.google.co.uk/'>
        <p>Home</p>
      </a>
      <a href='#'>
        <p>About</p>
      </a>
      <a href='#'>
        <p>Tools</p>
      </a>
      <a href='#'>
        <p>Contact</p>
      </a>
    </S.Navbar>
  );
};

export default Navbar;
