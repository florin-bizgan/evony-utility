import * as S from "./footer.style";

const Footer = ({ color, children }) => {
  return <S.Footer color={color}>{children}</S.Footer>;
};

export default Footer;
