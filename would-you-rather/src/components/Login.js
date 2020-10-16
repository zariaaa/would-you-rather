import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import userImg from '../user.png';

class Login extends Component {
    state = {
        selectedUser: ''
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { selectedUser } = this.state
        const { setAuthedUser } = this.props

        if (selectedUser) {
            setAuthedUser(selectedUser)
        } else alert('Select a user!')

    }

    onSelectUser = (selectedUser) => this.setState({ selectedUser })

    render () {
        const { users } = this.props
        const { selectedUser } = this.state

        return (
            <Fragment>
                <div className='form signin-form'>
                    <div className='card-header'>
                        <p className='card-title'>Would You Rather - login</p>
                    </div>
                    <div className='card-wrapper'>
                        <form onSubmit={this.handleLogin}>
                            <label className='sigin-title'>SELECT A USER: </label>
                            <div className='signin-body'>
                                <img 
                                    src={selectedUser === '' 
                                    ? userImg
                                    : users[selectedUser].avatarURL}
                                    alt={users[selectedUser]}
                                    className='user-avatar'/> 
                                <select 
                                    className='select-user' 
                                    onChange={(e) => this.onSelectUser(e.target.value)}>
                                    <option value=""> Select User</option>
                                    {
                                        Object.keys(users).map(user => 
                                            <option key={user} value={user}>
                                                {user}
                                            </option>)
                                    }
                                </select>                        
                            </div>

                            <button className='button'>SIGN IN</button>
                        </form>
                    </div>
                </div>
            </Fragment>

        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)