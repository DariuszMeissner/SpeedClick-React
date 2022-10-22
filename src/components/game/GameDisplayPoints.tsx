import React, { FC } from 'react'
import PAGE_CONFIG from '../../style/page.config'

interface IProps {
  points: number
  hint: string
}

const GameDisplayPoints: FC<IProps> = ({ points, hint }) => {
  return (
    <div>
      <h2 style={PAGE_CONFIG.heading}>{points}</h2>
      <p style={PAGE_CONFIG.hint}>{hint}</p>
    </div>
  )
}

export default GameDisplayPoints
