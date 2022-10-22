import React, { FC } from 'react'
import NumberInput from './number-input/NumberInput'

const style = {
  hint: {
    fontSize: '12px'
  },
  input: {
    background: 'gray',
    padding: 4,
    width: '80%',
    height: '80px',
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between'
  }
} as const

const MAX_LENGTH = 1

const SettingsForm: FC = () => {
  return (
    <>
      <form style={style.form}>
        <NumberInput style={style.input} name="digit1" length={MAX_LENGTH} />
        <NumberInput style={style.input} name="digit2" length={MAX_LENGTH} />
        <NumberInput style={style.input} name="digit3" length={MAX_LENGTH} />
        <NumberInput style={style.input} name="digit4" length={MAX_LENGTH} />
      </form>
      <p style={style.hint}>minimum time: 1000ms,1000 = 1s</p>
    </>
  )
}

export default SettingsForm
