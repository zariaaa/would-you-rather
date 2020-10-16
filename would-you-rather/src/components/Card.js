import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Card extends Component {
    render () {
        const { card } = this.props

        if (card === null ) {
            return <p>This card doesn't exist</p>
        }

        const { QuestionOne, QuestionTwo } = card
        const { id } = this.props

        return (
            <Link to={`/questions/${id}`} className='card-body form margin'>
            <div className='card-header'>
                <p className='card-title'>Would You Rather</p>
            </div>
            <div className='card-wrapper'>
                <p className='question-one'>{QuestionOne.text}</p>
                <div className='or-seperator'>
                    <p className='inline-p'>OR</p>
                </div>
                <p className='question-two'>{QuestionTwo.text}</p>
            </div>
        </Link>
        )
    }
}

function mapStateToProps ({authedUser, cards}, { id }) {
    const card = cards[id]

    return {
        authedUser,
        card,
        id,
    }
}

export default connect(mapStateToProps)(Card)