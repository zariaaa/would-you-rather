import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {
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
                    <NavLink className='nav-li' to='/leaderboard' exact activeClassName='active'>
                            Leaderboard
                    </NavLink>
                </li>
                
            </ul>        
        </nav>
    )
}

export default Menu;