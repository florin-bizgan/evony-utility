import { Field, Formik } from 'formik'
import * as S from './form.style'

const initialValues = {
  quantity: 0,
  troopType: '',
}




const Form = () => {
  const printeaza = (values, ) => {
    console.log('Eu sunt printeaza', values)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={printeaza}>
      {() => (
    <S.Form>
      <h1>This is something</h1>
      <p>Vai ca nu stiu</p>
      <div>
        <label htmlFor="quantity">Number of soldiers</label>
        <Field type="number" id='quantity' name='quantity'/>

        <Field type="radio" id='ground' name='troopType' value="ground"/>
        <Field type="radio" id='cavalry' name='troopType' value="cavalry"/>
        <Field type="radio" id='archery' name='troopType' value="archery"/>
        <Field type="radio" id='siege' name='troopType' value="siege"/>
      </div>
      <div>
        <button type="submit">Push me</button>
      </div>
    </S.Form>
      )}
    </Formik>
  )
}

export default Form
