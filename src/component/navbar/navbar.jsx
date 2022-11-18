import { Link } from "react-router-dom";
import * as S from "./navbar.style";

const Navbar = ({ children }) => {
  return (
    <S.Navbar>
      <Link></Link>
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
