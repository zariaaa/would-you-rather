import React, { Component } from 'react'
import Menu from './Menu'
import UserAcc from './UserAcc'

class MainMenu extends Component {
    render () {
        return (
            <div className='navigation-menu'>
                <Menu />
                <UserAcc />
            </div>
        )
    }
}

export default MainMenu