import React from 'react'
import PropTypes from 'prop-types'

import './Icon.sass'

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