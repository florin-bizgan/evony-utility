import { Field, Formik } from "formik";
import { SmartRadio } from "../smart-radio";
import { formData } from "./form.data";
import * as S from "./form.style";

const initialValues = {
  quantity: 0,
  troopType: "",
};

const Form = () => {
  const printeaza = (values) => {
    console.log("Eu sunt printeaza", values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={printeaza}>
      {() => (
        <S.Form>
          <h1>This is something</h1>
          <p>Vai ca nu stiu</p>
          <div>
            <label htmlFor="quantity">Number of soldiers</label>
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
            <button type="submit">Push me</button>
          </div>
        </S.Form>
      )}
    </Formik>
  );
};

export default Form;
