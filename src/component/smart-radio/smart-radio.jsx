import { Field } from 'formik'
import * as S from './smart-radio.style'

const SmartRadio = ({who, name, resource, label}) => {
  const { lumber, food, stone, ore } = resource
  return (
    <S.SmartRadio>
      <Field type="radio" id={who} name={name} value={who}/>
      <label htmlFor={who}>{label}</label>
      <ul>
        <li>Food: {food}</li>
        <li>Lumber: {lumber}</li>
        <li>Stone: {stone}</li>
        <li>Ore: {ore}</li>
      </ul>
    </S.SmartRadio>
  )
}

export default SmartRadio
