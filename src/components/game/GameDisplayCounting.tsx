/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { CSSProperties, FC, useEffect, useState } from 'react'

interface IProps {
  timeCountDown: number | null
  hint: string
  styleHeading: CSSProperties
  styleHint: CSSProperties
  styleBoxNumber: CSSProperties
}

const GameDisplayCounting: FC<IProps> = ({
  timeCountDown,
  hint,
  styleHeading,
  styleHint,
  styleBoxNumber
}) => {
  const [splitOnDigit, setSplitOnDigit] = useState<string[]>([])

  useEffect(() => {
    const complementNumberResult = complementNumber()
    const arrayFromTimeResult = arrayFromTime()
    const arrayLengthResult = arrayLength()

    if (arrayFromTimeResult && arrayLengthResult < 4) {
      const complementArray = [...complementNumberResult].concat(
        arrayFromTimeResult
      )
      setSplitOnDigit(complementArray)
    } else {
      setSplitOnDigit(arrayFromTimeResult)
    }
  }, [timeCountDown])

  const arrayLength = (): number => {
    const arrayFromTimeResult = arrayFromTime()
    return (arrayFromTimeResult && arrayFromTimeResult.length) || 0
  }

  const complementNumber = (): string[] => {
    const arrayLengthResult = arrayLength()
    const result = []

    for (let i = 1; i <= 4 - arrayLengthResult; i++) {
      result.push('0')
    }
    return result
  }

  const arrayFromTime = (): string[] => {
    return timeCountDown?.toString().split('') || ['0']
  }

  const displaySplitedTime = splitOnDigit?.map((el: string) => {
    return <span style={styleBoxNumber}>{el}</span>
  })

  return (
    <div>
      <div style={styleHeading}>{displaySplitedTime}</div>
      <p style={styleHint}>{hint}</p>
    </div>
  )
}

export default GameDisplayCounting
