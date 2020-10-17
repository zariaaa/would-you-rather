import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class UserAcc extends Component {
    handleLogout = () => {
        const { setAuthedUser, history } = this.props
        setAuthedUser(null)
        history.push('/login')
    }

    render () {
        const { authedUser, avatar } = this.props
        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li onClick={this.handleLogout} className='nav-li'>
                        Logout
                    </li>
                    <li className='user-name nav-li'>
                        <img 
                            src={avatar}
                            alt={`Avatar of ${avatar}`}
                            className='user-avatar small-sircle'/>
                    </li>
                    <li className='padding-zero user-name nav-li'>
                        {authedUser}
                    </li>
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    const avatar = users[authedUser] && users[authedUser].avatarURL

    return {
        authedUser,
        avatar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserAcc))