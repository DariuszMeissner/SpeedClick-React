import React, { FC } from 'react'

const style = {
  header: {
    position: 'absolute',
    top: '0',
    padding: '12px',
    textAlign: 'left'
  },
  heading: {
    fontWeight: '700'
  }
} as const

const Header: FC = () => {
  return (
    <div>
      <h6 style={style.heading}>Speed Click game</h6>
    </div>
  )
}

export default Header
