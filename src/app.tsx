import React, { FC, ReactNode, useMemo, useState } from 'react'
import TimerContext from './context/timerContext'

type TProps = {
  children: ReactNode
}

const style = {
  app: {
    backgroundImage:
      'radial-gradient(circle,rgba(0, 0, 0, 1) 26%,rgba(98, 92, 92, 1) 100%)',
    color: 'white',
    overflow: 'hidden'
  }
}

const App: FC<TProps> = ({ children }) => {
  const [playTime, updatePlayTime] = useState(1000)
  const [digits, updateDigits] = useState({
    digit1: 1,
    digit2: 0,
    digit3: 0,
    digit4: 0
  })
  const value = useMemo(
    () => ({
      playTime,
      updatePlayTime,
      digits,
      updateDigits
    }),
    [playTime, updatePlayTime, digits, updateDigits]
  )

  return (
    <TimerContext.Provider value={value}>
      <div style={style.app}>{children}</div>
    </TimerContext.Provider>
  )
}

export default App
