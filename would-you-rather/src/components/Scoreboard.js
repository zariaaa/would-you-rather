import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MainMenu from './MainMenu'

class Scoreboard extends Component {
    render () {
        const { users, data } = this.props
        return (
            <Fragment>
                <MainMenu />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th className='padding-right'>User</th>
                            <th>Questions Created</th>
                            <th>Questions Answered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => (
                               <tr key={user.uid}>
                                   <td>{index + 1}</td>
                                   <td>
                                    <ul className='fix-nav nav nav-account'>
                                        <li className='nav-li user-name'>
                                            <img 
                                                src={users[user.uid].avatarURL} 
                                                alt={`Avatar for ${users[user.uid].name}`}
                                                className='user-avatar big-sircle'/>
                                                <span className='nav-li user-name'>{users[user.uid].name}</span>
                                        </li>
                                    </ul>
                                   </td>
                                   <td>{user.createdCards}</td>
                                   <td>{user.answeredCards}</td>
                               </tr> 
                            ))
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

function mapStateToProps ({ users }) {
    const data = Object.keys(users).map((uid) => {
      return {
        uid,
        createdCards: users[uid].questions.length,
        answeredCards: Object.keys(users[uid].answers).length
      }  
    }).sort((a, b) => (b.createdCards + b.answeredCards) - (a.createdCards + a.answeredCards))

    return {
        users,
        data
    }
}

export default connect(mapStateToProps)(Scoreboard)