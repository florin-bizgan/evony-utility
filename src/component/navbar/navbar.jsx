import { Link } from "react-router-dom";
import * as S from "./navbar.style";

const Navbar = ({ children }) => {
  return (
    <S.Navbar>
      {/* <a href='/home'>
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
      </a> */}

      <Link to='/home'>
        <p>Home</p>
      </Link>
      <Link to='/about'>
        <p>About</p>
      </Link>
      <Link to='/tools'>
        <p>Tools</p>
      </Link>
      <Link to='/contact'>
        <p>Contact</p>
      </Link>
      {children}
    </S.Navbar>
  );
};

export default Navbar;
