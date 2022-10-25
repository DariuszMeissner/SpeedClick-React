/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useEffect, useState } from 'react'
import PAGE_CONFIG from '../../style/page.config'

interface IProps {
  points: number
  time: number | null
  endGame: boolean
  duration: number
}

const style = {
  backplate: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0000004a'
  },
  modal: {
    background: PAGE_CONFIG.colors.blue,
    minWidth: '20vw',
    padding: '20px'
  },
  points: {
    fontSize: '40px'
  }
} as const

const Modal: FC<IProps> = ({ points, time, endGame, duration }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    setOpenModal(true)
    const timeout = setTimeout(() => setOpenModal(false), duration)

    return () => clearTimeout(timeout)
  }, [])

  const achivement = () => {
    return (
      <>
        <h2>{points > 0 ? 'Congratulations!!!' : 'No to good!!!'}</h2>
        <p style={style.points}>
          {points} {points === 1 ? 'point' : 'points'}
        </p>{' '}
      </>
    )
  }

  const showAchivement = achivement()

  return (
    <div>
      {endGame && openModal && (
        <div style={style.backplate}>
          <div style={style.modal}>
            {showAchivement}
            <p>in time {time} ms</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
