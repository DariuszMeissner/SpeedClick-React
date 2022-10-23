/* eslint-disable react/require-default-props */
import React, { FC } from 'react'

interface IProps {
  text: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant: string
}

const Button: FC<IProps> = ({ text, disabled, onClick, variant }) => {
  return (
    <button
      type="button"
      className={variant}
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
