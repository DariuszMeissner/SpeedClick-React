import React from 'react'
import { Button } from './Button'

export const Intro = ({onClick}) => {

    return (
      <div className='intro'>
        <h1 className="intro__title" >Speed Click game</h1>
        <p className='intro__slogan'>Challenge yourself with time</p>
        <p className='intro__inc'>the game is about clicking a button within a certain time. When this is successful, the time is reset to the initial value - 50ms</p>
        <Button variant="btn btn-primary btn-lg" text="Start The Game" onClick={onClick} />
      </div>
    );
}
