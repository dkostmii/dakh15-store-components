import React from 'react'
import PropTypes from 'prop-types'

import './Icon.scss'

function Icon({ className, children }) {
    return (
        <i className={'icon ' + className}>
            { children }
        </i>
    )
}
Icon.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.any
}

export default Icon