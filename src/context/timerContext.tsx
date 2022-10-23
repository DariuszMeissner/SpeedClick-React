import React, { createContext } from 'react'

export interface ITimer {
  playTime: number | null
  updatePlayTime: React.Dispatch<React.SetStateAction<number>>
  digits: IDigits
  updateDigits: React.Dispatch<React.SetStateAction<IDigits>>
}

export interface IDigits {
  digit1: number
  digit2: number
  digit3: number
  digit4: number
}

const TimerContext = createContext<ITimer>({
  playTime: 0,
  updatePlayTime: () => {},
  digits: {
    digit1: 1,
    digit2: 0,
    digit3: 0,
    digit4: 0
  },
  updateDigits: () => {}
})

export default TimerContext
