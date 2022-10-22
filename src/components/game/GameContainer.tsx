import React, { FC } from 'react'
import PAGE_CONFIG from '../../style/page.config'
import Game from './Game'

const style = {
  wrap: {
    ...PAGE_CONFIG.wrap
  },
  game: {
    textAlign: 'center',
    ...PAGE_CONFIG.component
  }
} as const

const GameContainer: FC = () => {
  return (
    <div style={style.wrap}>
      <div style={style.game}>
        <Game />
      </div>
    </div>
  )
}

export default GameContainer
