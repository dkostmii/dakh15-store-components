import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

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

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    href: PropTypes.string
}

export default Button