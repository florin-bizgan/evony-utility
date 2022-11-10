import * as S from './button.style'

const Button = ({name, color, href, id, radius}) => {
  return (
    <S.Button color={color}>
      {name}
    </S.Button>
  )
}

export default Button
