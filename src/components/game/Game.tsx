/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TimerContext from '../../context/timerContext'
import Button from '../button/Button'
import Modal from '../modal/Modal'
import GameDisplay from './GameDisplay'
import GameNav from './GameNav'
import CONFIG from './game.config'

const style = {
  game: {
    background: {
      background: 'rgb(79 79 79)'
    }
  }
}

const Game: FC = () => {
  const [status, setStatus] = useState<string>(CONFIG.status.NEW_GAME)
  const [end, setEnd] = useState<boolean>(false)
  const [timerId, setTimerId] = useState<NodeJS.Timer>()
  const { playTime } = useContext(TimerContext)
  const [timeRemaining, seTimeRemeining] = useState<number | null>(playTime)
  const [startingTime, setStartingTime] = useState<number | null>(playTime)
  const [points, setPoints] = useState<number>(0)

  useEffect(() => {
    if (timeRemaining === 0) {
      endedGame()
    }
  }, [timeRemaining])

  useEffect(() => {
    if (status === CONFIG.status.STARTED) {
      const timer = setInterval(() => {
        countDown()
      }, 50)
      setTimerId(timer)
    }
  }, [status])

  const countDown = () => {
    seTimeRemeining((prev) => prev && prev - 50)
  }

  const handleStart = () => {
    setStatus(CONFIG.status.STARTED)
  }

  const endedGame = () => {
    clearInterval(timerId)
    setStatus(CONFIG.status.ENDED)
    setEnd(true)
  }

  const handleAddPoint = () => {
    setPoints((prev) => prev + 1)
    setStartingTime((prev) => prev && prev - 50)
    seTimeRemeining(startingTime)
  }

  const handleNewGame = () => resetGame()

  const resetGame = () => {
    seTimeRemeining(playTime)
    setStartingTime(playTime)
    setPoints(0)
    setStatus(CONFIG.status.NEW_GAME)
    setEnd(false)
  }

  return (
    <div style={style.game.background}>
      {status === CONFIG.status.ENDED && (
        <div>
          <Button
            variant="btn btn-lg btn-success"
            text="New game"
            onClick={handleNewGame}
          />

          <Link to="/settings">
            <Button variant="btn btn-lg btn-light" text="Change time" />
          </Link>
        </div>
      )}

      {!(status === CONFIG.status.ENDED) && (
        <>
          <GameDisplay
            points={points}
            timeRemaining={timeRemaining}
            startingTime={startingTime}
          />
          <GameNav
            handleStart={handleStart}
            handleAddPoint={handleAddPoint}
            status={status}
            points={points}
          />
        </>
      )}

      <Modal points={points} time={playTime} endGame={end} duration={3000} />
    </div>
  )
}

export default Game
