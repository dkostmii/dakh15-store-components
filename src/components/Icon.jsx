import React from 'react'

import './Icon.sass'

function Icon({ className, children }) {
  return (
    <i className={'icon ' + className}>
      { children }
    </i>
  )
}

export default Icon