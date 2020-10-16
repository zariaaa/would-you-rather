import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { handleInitialUsers } from '../actions/shared'
import Dashboard from './Dashboard'
import CardContent from './CardContent'
import LoadingBar from 'react-redux-loading-bar'
import AddCard from './AddCard'
import Scoreboard from './Scoreboard'
import Error404 from './Error404'

class App extends Component {
  componentDidMount() {
    const AUTHED_ID = null;
    this.props.dispatch((handleInitialUsers(AUTHED_ID)))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#fff'}}/>
          <Switch>
            { 
              this.props.authedUser === null
              ? <Route path='/' exact component={Login} />
              : <Fragment>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:question_id' component={CardContent} />
                  <Route path='/add' exact component={AddCard} />
                  <Route path='/scoreboard' exact component={Scoreboard} />
                </Fragment>
            }
            <Route component={Error404} />
          </Switch>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
