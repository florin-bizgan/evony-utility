import * as S from "./flex.style";

const Flex = ({ padding, children, column, justify, align, gap }) => {
  return (
    <S.Flex
      justify={justify}
      column={column}
      align={align}
      gap={gap}
      padding={padding}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
