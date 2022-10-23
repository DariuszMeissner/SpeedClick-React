import React, { FC } from 'react'
import NumberInput from './number-input/NumberInput'

const style = {
  hint: {
    fontSize: '12px'
  },
  input: {
    width: '100%',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    background: 'gray',
    padding: '18px 0',
    border: '1px solid rgb(88 88 88)',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
  },
  button: {
    position: 'relative',
    width: '100%',
    zIndex: 10,
    background: 'bgray',
    color: 'black',
    textShadow: '0px 0px 1px rgb(0 0 0)',
    fontWeight: 800,
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
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
        <NumberInput
          styleInput={style.input}
          styleButton={style.button}
          name="digit1"
          length={MAX_LENGTH}
        />
        <NumberInput
          styleInput={style.input}
          styleButton={style.button}
          name="digit2"
          length={MAX_LENGTH}
        />
        <NumberInput
          styleInput={style.input}
          styleButton={style.button}
          name="digit3"
          length={MAX_LENGTH}
        />
        <NumberInput
          styleInput={style.input}
          styleButton={style.button}
          name="digit4"
          length={MAX_LENGTH}
        />
      </form>
      <p style={style.hint}>minimum time: 1000ms,1000 = 1s</p>
    </>
  )
}

export default SettingsForm
