import styled from "styled-components";

const colorMap = {
  funGreen: '#046B2D',
  milanoRed: '#C62A08',
  transparent: 'transparent',
  lavenderMagenta: '#ED61D2',
  cornflowerBlue: '#6179ED',
  fruitSalad: '#4AA14C'
}

export const Button = styled.button`
  background-color: ${({color}) => colorMap[color]};
  border-radius: 15px;
  border: 1px solid black;
  cursor: pointer;
  color: white;
  :hover {
    color: yellow;
    background-color: grey;
  }
`
