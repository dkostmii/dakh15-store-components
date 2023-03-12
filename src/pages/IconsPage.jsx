import React from 'react'

import Icon from '../components/Icon'
import IconBurger from '../components/IconBurger'

import './IconsPage.sass'

function IconsPage() {
    return (
        <div>
            <h1>Icons</h1>
            <div className="table-icons">
                <Icon className="cart">
                    <span>{ '1' }</span>
                </Icon>
                <Icon className="cart">
                    <span>{ '9+' }</span>
                </Icon>

                <Icon className="cart">
                    <Icon className="check" />
                </Icon>

                <IconBurger />
            </div>
        </div>
    )
}

export default IconsPage
