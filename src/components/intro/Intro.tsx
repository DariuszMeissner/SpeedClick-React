/* eslint-disable consistent-return */
import React, { FC } from 'react'
import './intro.scss'

const TITLE = 'Speed Click Game'.split(' ')

const Intro: FC = () => {
  return (
    <div className="intro">
      {TITLE.map((el) => (
        <span key={el}>{el}&nbsp;</span>
      ))}
      <p>Challenge yourself with time</p>
    </div>
  )
}

export default Intro
