import { Field } from 'formik'
import * as S from './smart-radio.style'

const SmartRadio = ({who, name, value, label}) => {
  return (
    <S.SmartRadio>
      <Field type="radio" id={who} name={name} value={who}/>
      <label htmlFor={who}>{label}</label>
    </S.SmartRadio>
  )
}

export default SmartRadio
