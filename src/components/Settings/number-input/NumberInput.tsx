import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import TimerContext, { IDigits } from '../../../context/timerContext'
import './NumberInput.scss'

interface IProps {
  style: React.CSSProperties
  name: string
  length: number
}

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    position: 'relative',
    width: '100%',
    zIndex: 10
  }
} as const

const NumberInput: FC<IProps> = ({ name, length, style }) => {
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

  const onUpArrow = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = (e.target as HTMLButtonElement).name

    inputRef.current?.classList.toggle('active-up')
    setActiveClass(true)

    if (value >= 0 && value < 9) {
      setValue((prev) => prev + 1)
    } else {
      setValue(0)
    }
    nameRef.current = targetName
  }

  const onDownArrow = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = (e.target as HTMLButtonElement).name

    inputRef.current?.classList.toggle('active-down')
    setActiveClass(true)

    if (value > 0 && value <= 9) {
      setValue((prev) => prev - 1)
    } else {
      setValue(9)
    }
    nameRef.current = targetName
  }

  return (
    <div style={styles.box}>
      <button
        name={name}
        type="button"
        onClick={onDownArrow}
        style={styles.button}>
        -
      </button>
      <input
        style={style}
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
        onClick={onUpArrow}
        style={styles.button}>
        +
      </button>
    </div>
  )
}

export default NumberInput
