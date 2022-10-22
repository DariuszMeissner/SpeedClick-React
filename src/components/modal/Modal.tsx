/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useEffect, useState } from 'react'

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
    background: 'red',
    minWidth: '20vw',
    padding: '20px'
  }
} as const

const Modal: FC<IProps> = ({ points, time, endGame, duration }) => {
  const [openModal, setOpenModal] = useState<boolean>(true)

  useEffect(() => {
    if (openModal) {
      setInterval(() => setOpenModal(false), duration)
    } else {
      setOpenModal(true)
    }
  }, [endGame])

  const achivement = () => {
    return (
      <>
        <h1>{points > 0 ? 'Congratulations!!!' : 'No to good!!!'}</h1>
        <p>You achived {points} points</p>{' '}
      </>
    )
  }

  return (
    <div>
      {endGame && openModal && (
        <div style={style.backplate}>
          <div style={style.modal}>
            {achivement()}
            <p>in time {time} ms</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
