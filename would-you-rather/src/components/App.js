import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboarrd from './Dashboard';

export class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Dashboarrd />
                </header>
            </div>
        )
    }
}

export default connect()(App);
