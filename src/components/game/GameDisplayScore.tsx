import React, { FC } from 'react'

interface IProps {
  bestResult: number
}

const GameDisplayScore: FC<IProps> = ({ bestResult }) => {
  return <div>Best Score: {bestResult} points</div>
}

export default GameDisplayScore
