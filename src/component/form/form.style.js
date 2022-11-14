import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  /* border: 1px solid red; */
  border-radius: 10px;
  padding: 1rem;
  /* margin: 15px 0px 0px 15px; */

  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: white;
`;
