/* eslint-disable react/require-default-props */
import React, { FC } from 'react'
import Button from '../button/Button'
import GameInfoTable from './GameInfoTable'

interface IProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  timer: number
  setNewGame: () => void
  scores: number[]
}

const GameInfo: FC<IProps> = ({ onClick, timer, setNewGame, scores }) => {
  return (
    <div className="game__info">
      <div className="d-grid gap-2">
        <Button
          variant="btn btn-light btn-block"
          text="Change time"
          onClick={onClick}
        />
        {timer === 0 && (
          <Button
            variant="btn btn-secondary btn-block"
            text="New Game"
            onClick={setNewGame}
          />
        )}
      </div>
      <GameInfoTable scores={scores} />
    </div>
  )
}

export default GameInfo
