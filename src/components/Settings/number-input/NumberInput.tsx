import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import TimerContext, { IDigits } from '../../../context/timerContext'
import './NumberInput.scss'

interface IProps {
  styleInput: React.CSSProperties
  styleButton: React.CSSProperties
  name: string
  length: number
}

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
} as const

const NumberInput: FC<IProps> = ({ name, length, styleInput, styleButton }) => {
  const { digits, updateDigits } = useContext(TimerContext)
  const [value, setValue] = useState<number>(1)
  const nameRef = useRef<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [activeClass, setActiveClass] = useState<boolean>(false)

  useEffect(() => {
    updateDigits({
      ...digits,
      [nameRef.current]: value
    })
  }, [value])

  useEffect(() => {
    const currentValue = digits[name as keyof IDigits]
    setValue(currentValue)
  }, [])

  useEffect(() => {
    if (activeClass) {
      setTimeout(() => {
        inputRef.current?.classList.remove('active-up')
        inputRef.current?.classList.remove('active-down')
        setActiveClass(false)
      }, 200)
    }
  }, [activeClass])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return !/[0-9]/.test(e.key) && e.preventDefault()
  }

  const onClickArrow = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = (e.target as HTMLButtonElement).name
    const targetTitle = (e.target as HTMLButtonElement).title
    nameRef.current = targetName
    setActiveClass(true)

    if (targetTitle === 'minus') {
      inputRef.current?.classList.toggle('active-down')
      if (value > 0 && value <= 9) {
        setValue((prev) => prev - 1)
      } else {
        setValue(9)
      }
    }

    if (targetTitle === 'plus') {
      inputRef.current?.classList.toggle('active-up')
      if (value >= 0 && value < 9) {
        setValue((prev) => prev + 1)
      } else {
        setValue(0)
      }
    }
  }

  return (
    <div style={styles.box}>
      <button
        name={name}
        type="button"
        onClick={onClickArrow}
        style={styleButton}
        title="minus">
        -
      </button>
      <input
        style={styleInput}
        value={value}
        name={name}
        type="text"
        maxLength={length}
        readOnly
        onKeyPress={handleKeyPress}
        ref={inputRef}
      />
      <button
        name={name}
        type="button"
        onClick={onClickArrow}
        style={styleButton}
        title="plus">
        +
      </button>
    </div>
  )
}

export default NumberInput
