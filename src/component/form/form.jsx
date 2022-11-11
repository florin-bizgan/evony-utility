import { Field, Formik } from "formik";
import { useState } from "react";
import { findResource } from "../../util/form";
import { prettyNumber } from "../../util/number";
import { Button } from "../button";
import { SmartRadio } from "../smart-radio";
import { formData, initialValues } from "./form.data";
import * as S from "./form.style";

const Form = () => {
  const [result, showResult] = useState({});

  const printeaza = (values) => {
    const { resource } = findResource(values.troopType, formData);

    showResult({
      food: values.quantity * resource.food,
      lumber: values.quantity * resource.lumber,
      stone: values.quantity * resource.stone,
      ore: values.quantity * resource.ore,
    });
  };

  return (
    <div>
      <h1>Evony Troops Trainer Resource Calculator</h1>
      <p>Food: {prettyNumber(result.food)}</p>
      <p>Lumber: {prettyNumber(result.lumber)}</p>
      <p>Stone: {prettyNumber(result.stone)}</p>
      <p>Ore: {prettyNumber(result.ore)}</p>
      <Formik initialValues={initialValues} onSubmit={printeaza}>
        {() => (
          <S.Form>
            <div>
              <label htmlFor="quantity">Number of soldiers </label>
              <Field type="number" id="quantity" name="quantity" />
              {/* <Field type="radio" id='ground' name='troopType' value="ground"/>
          <label htmlFor="ground">Ground</label> */}
              {formData.map(({ resource, label, troopType }) => {
                return (
                  <SmartRadio
                    label={label}
                    name="troopType"
                    who={troopType}
                    resource={resource}
                  />
                );
              })}
            </div>
            <div>
              <Button color="fruitSalad" onClick="submit">Click Me</Button>
            </div>
          </S.Form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
