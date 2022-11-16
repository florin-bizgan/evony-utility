import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
  padding: ${({ padding }) => `${padding}px`};
  flex-direction: ${({ column }) => column};

  /* 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  flex-direction: column; */
`;
