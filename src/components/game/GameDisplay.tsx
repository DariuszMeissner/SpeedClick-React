import React, { FC } from 'react'
import PAGE_CONFIG from '../../style/page.config'
import GameDisplayCounting from './GameDisplayCounting'

interface IProps {
  points: number
  timeRemaining: number | null
  startingTime: number | null
}

const style = {
  display: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  heading: {
    ...PAGE_CONFIG.heading,
    display: 'flex',
    justifyContent: 'space-between'
  },
  headingSmall: {
    fontSize: '32px',
    background: '#415094'
  },
  hint: {
    ...PAGE_CONFIG.hint
  },
  hintGreen: {
    background: PAGE_CONFIG.colors.green
  },
  hintBlue: {
    background: PAGE_CONFIG.colors.blue
  },
  hintGray: {
    background: PAGE_CONFIG.colors.gray
  },
  boxNumberGray: {
    background: 'gray',
    paddingRight: '12px',
    paddingLeft: '12px',
    border: `1px solid  ${PAGE_CONFIG.colors.gray}`,
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 30px 60px -18px inset, rgb(0 0 0 / 54%) 0px 18px 36px -6px inset'
  },
  boxNumberGreen: {
    background: '#278f32',
    paddingLeft: '4px',
    paddingRight: '4px',
    border: `1px solid  ${PAGE_CONFIG.colors.green}`,
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 30px 60px -12px inset, rgb(4 23 6) 0px 18px 36px -18px inset'
  },
  boxNumberBlue: {
    background: '#243993',
    paddingLeft: '4px',
    paddingRight: '4px',
    border: `1px solid ${PAGE_CONFIG.colors.blue}`,
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 30px 60px -12px inset, rgb(255 255 255 / 30%) 0px 18px 36px -18px inset'
  },
  boxNumberSmall: {}
} as const

const GameDisplay: FC<IProps> = ({ points, timeRemaining, startingTime }) => {
  return (
    <>
      <div style={style.display}>
        <GameDisplayCounting
          timeCountDown={timeRemaining}
          hint="time remaining"
          styleHeading={{ ...style.heading, ...style.headingSmall }}
          styleHint={{ ...style.hint, ...style.hintBlue }}
          styleBoxNumber={{ ...style.boxNumberBlue, ...style.boxNumberSmall }}
        />
        <GameDisplayCounting
          timeCountDown={startingTime}
          hint="starting time"
          styleHeading={{ ...style.heading, ...style.headingSmall }}
          styleHint={{ ...style.hint, ...style.hintGreen }}
          styleBoxNumber={{ ...style.boxNumberGreen, ...style.boxNumberSmall }}
        />
      </div>
      <GameDisplayCounting
        timeCountDown={points}
        hint="points"
        styleHeading={style.heading}
        styleHint={{ ...style.hint, ...style.hintGray }}
        styleBoxNumber={style.boxNumberGray}
      />
    </>
  )
}

export default GameDisplay
