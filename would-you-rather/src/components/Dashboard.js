import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Dashboard
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);