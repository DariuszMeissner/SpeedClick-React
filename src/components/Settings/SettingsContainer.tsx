/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useState, useEffect, useContext } from 'react'
import TimerContext from '../../context/timerContext'
import PAGE_CONFIG from '../../style/page.config'
import Settings from './Settings'

const style = {
  wrap: {
    ...PAGE_CONFIG.wrap
  },
  settings: {
    textAlign: 'center',
    ...PAGE_CONFIG.component
  }
} as const

const SettingsContainer: FC = () => {
  const [disabled, setDisabled] = useState<boolean>(true)
  const { playTime, updatePlayTime, digits } = useContext(TimerContext)
  const [value, setValue] = useState<number>(playTime || 1000)

  useEffect(() => {
    setValue(convertTimeFromDigits)

    updatePlayTime(value)

    if (value >= 1000) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [value, digits])

  const convertTimeFromDigits =
    digits.digit1 * 1000 +
    digits.digit2 * 100 +
    digits.digit3 * 10 +
    digits.digit4 * 1

  return (
    <div style={style.wrap}>
      <div style={style.settings}>
        <Settings disabled={disabled} />
      </div>
    </div>
  )
}

export default SettingsContainer
