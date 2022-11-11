import styled from "styled-components";

const colorMap = {
  milanoRed: '#C62A08',
  lavenderMagenta: '#ED61D2',
  cornflowerBlue: '#6179ED',
  fruitSalad: '#4AA14C',
  shark: '#21252B',
  chambray: '#395D93',
}

export const Footer = styled.div`
  background-color: ${({color}) => colorMap[color]};
  color: white;
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  * {
    margin: 0;
  }

`
