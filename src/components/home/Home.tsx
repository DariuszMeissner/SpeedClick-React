import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const Home: FC = () => {
  return (
    <div>
      <p>The game is about clicking a button within a certain time.</p>
      <p>
        When this is successful,
        <br /> the time is reset to the initial value - 50ms
      </p>
      <Link to="/settings">
        <Button variant="btn btn-primary btn-lg" text="Start The Game" />
      </Link>
    </div>
  )
}

export default Home
