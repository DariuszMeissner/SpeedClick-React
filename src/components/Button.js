import React from 'react';

export const Button = ({text,disabled, onClick,variant}) => {
    return (
      <button className={variant} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    );
}
