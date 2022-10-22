import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import PAGE_CONFIG from '../../style/page.config'
import Button from '../button/Button'
import SettingsForm from './SettingsForm'

interface IProps {
  disabled: boolean
}

const Settings: FC<IProps> = ({ disabled }) => {
  const hintToSmallValue = disabled && (
    <p>please insert value greater or equal 1000</p>
  )

  const showSubmitButton = !disabled && (
    <Link to="/game">
      <Button variant="btn btn-success btn-lg w-100" text="Submit time" />
    </Link>
  )

  return (
    <div style={PAGE_CONFIG.panel}>
      <h3>Choose time</h3>
      <SettingsForm />
      <div>
        {hintToSmallValue}
        {showSubmitButton}
      </div>
    </div>
  )
}

export default Settings
