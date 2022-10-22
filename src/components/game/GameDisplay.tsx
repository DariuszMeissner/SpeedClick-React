import React, { FC } from 'react'
import './GameDisplay.scss'
import GameDisplayCounting from './GameDisplayCounting'
import GameDisplayPoints from './GameDisplayPoints'

interface IProps {
  points: number
  timeRemaining: number | null
  startingTime: number | null
}

const GameDisplay: FC<IProps> = ({ points, timeRemaining, startingTime }) => {
  return (
    <div>
      <div className="d-flex">
        <GameDisplayPoints points={points} hint="Points" />
        <GameDisplayCounting
          animationClass="starting-time"
          timeCountDown={startingTime}
          hint="starting time"
        />
      </div>

      <GameDisplayCounting
        animationClass="remaining-time"
        timeCountDown={timeRemaining}
        hint="time remaining"
      />
    </div>
  )
}

export default GameDisplay
