import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu () {
    return (
        <nav>
            <ul className='nav'>
                <li className='nav-li'>
                    <NavLink className='nav-li' to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='nav-li' to='/add' exact activeClassName='active'>
                        Add Card
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='nav-li' to='/scoreboard' exact activeClassName='active'>
                        Scoreboard
                    </NavLink>
                </li>
            </ul>        
        </nav>
    )
}