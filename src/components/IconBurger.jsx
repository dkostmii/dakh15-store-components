import React, { useState } from 'react'

import { ReactComponent as Burger } from '../icons/burger.svg'

import './IconBurger.scss'

function IconBurger() {
    const [active, setActive] = useState(false)

    const className = 'burger' + (active ? ' active' : '')

    const clickListener = () => {
        setActive(!active)
    }

    return (
        <Burger className={className} onClick={clickListener} />
    )
}

export default IconBurger