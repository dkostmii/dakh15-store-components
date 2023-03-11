import React from 'react'
import './Button.sass'

function Button({ className, onClick, children, disabled, href }) {
  if (typeof href === 'string') {
    return (
      <a className={'btn ' + className} href={href} disabled={disabled} onClick={onClick}>
        { children }
      </a>
    )
  }

  return (
    <button type="button" className={'btn ' + className} onClick={onClick} disabled={disabled}>
      { children }
    </button>
  )
}

export default Button