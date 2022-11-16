import styled from "styled-components";

export const Navbar = styled.div`
  background-color: #21252b;
  margin: 0;
  height: 55px;
  color: white;
  font-size: 32px;
  padding-bottom: 25px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;

  p:hover {
    color: #f1356d;
    cursor: pointer;
  }
`;
