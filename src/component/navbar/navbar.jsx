import * as S from "./navbar.style";

const Navbar = ({ children }) => {
  return (
    <S.Navbar>
      <a href='/home'>
        <p>Home</p>
      </a>
      <a href='/about'>
        <p>About</p>
      </a>
      <a href='/tools'>
        <p>Tools</p>
      </a>
      <a href='/contact'>
        <p>Contact</p>
      </a>
      {children}
    </S.Navbar>
  );
};

export default Navbar;
