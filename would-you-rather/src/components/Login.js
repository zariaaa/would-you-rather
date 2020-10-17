import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        selectedUser: '',
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { history } = this.props
        const { selectedUser } = this.state
        const { setAuthedUser } = this.props

        if (selectedUser) {
            const pathname = localStorage.getItem('pathname');
            setAuthedUser(selectedUser)
            if(pathname){
                history.push(pathname);
            }
            else{
                history.push('/');
            }
            localStorage.removeItem('pathname');
        } else alert('Select a user!')
    }

    onSelectUser = (selectedUser) => this.setState({ selectedUser })

    render () {
        const { users} = this.props
        const { selectedUser} = this.state

        return (
           
            <Fragment>
                <div className='form signin-form'>
                    <div className='card-header'>
                        <p className='card-title'>Would You Rather Login</p>
                    </div>
                    <div className='card-wrapper'>
                        <form onSubmit={this.handleLogin}>
                            <label className='sigin-title'>SELECT A USER: </label>
                            <div className='signin-body'>
                                <img 
                                    src={selectedUser === '' 
                                    ? 'https://thumbnail.imgbin.com/1/25/9/imgbin-youtube-user-computer-icons-information-youtube-B58QuatNrN3FjqHtDE02EytZ2_t.jpg'
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

function mapStateToProps ({ users , authedUser}) {
    return {
        users,
        authedUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))