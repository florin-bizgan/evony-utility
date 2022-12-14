import styled from "styled-components";

export const Contact = styled.div`
  color: white;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 25px;
  /* border-radius: 10px; */
  /* margin: 10px; */

  @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

  form {
    max-width: 420px;
    margin: 50px auto;
    background-color: lightgray;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px #000;
  }

  .feedback-input {
    /* color: white; */
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #cc6666;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
  }

  .feedback-input:focus {
    border: 2px solid #cc4949;
  }

  textarea {
    height: 150px;
    line-height: 150%;
    resize: vertical;
  }

  [type="submit"] {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    width: 100%;
    background: #cc6666;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
  }
  [type="submit"]:hover {
    background: #cc4949;
  }
`;
