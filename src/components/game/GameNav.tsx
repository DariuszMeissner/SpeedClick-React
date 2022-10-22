import React, { FC, useRef } from 'react'
import useAnimationClick from '../../hooks/useAnimationClick'
import Button from '../button/Button'
import CONFIG from './game.config'

interface IProps {
  points: number
  status: string
  handleStart: () => void
  handleAddPoint: () => void
}

const GameNav: FC<IProps> = ({
  points,
  status,
  handleStart,
  handleAddPoint
}) => {
  const btnConfig = {
    started: {
      variant: 'btn-danger',
      onClick: handleAddPoint,
      text: 'Click me'
    },
    newGame: {
      variant: 'btn-warning',
      onClick: handleStart,
      text: 'Start'
    }
  }
  const buttonRef = useRef<HTMLDivElement>(null)

  useAnimationClick(buttonRef, points)

  return (
    <div>
      {status === CONFIG.status.STARTED && (
        <div ref={buttonRef}>
          <Button
            variant={`btn btn-lg ${btnConfig.started.variant}`}
            text={btnConfig.started.text}
            onClick={btnConfig.started.onClick}
          />
        </div>
      )}

      {status === CONFIG.status.NEW_GAME && (
        <Button
          variant={`btn btn-lg ${btnConfig.newGame.variant}`}
          text={btnConfig.newGame.text}
          onClick={btnConfig.newGame.onClick}
        />
      )}
    </div>
  )
}

export default GameNav
