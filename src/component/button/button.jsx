import * as S from './button.style'

const Button = ({title, children, color, onClick, href, id}) => {
  return (
    <S.Button color={color} onClick={onClick} title={title}>
      {children}
    </S.Button>
  )
}

export default Button
