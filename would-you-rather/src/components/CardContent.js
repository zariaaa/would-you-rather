import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MainMenu from './MainMenu'
import { formatDate } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'
import { handleSaveCardAnswer } from '../actions/shared'

class CardContent extends Component {
    state = {
        selectedQuestion: ''
    }

    selectRadio = (e) => {
        this.setState({
            selectedQuestion: e.target.value
        })
    }

    submitAnswer = (e) => {
        e.preventDefault()

        const { saveCardAnswer } = this.props
        const answer = this.state.selectedQuestion

        // i have succesfully got the answer text now check the _data file to see what is the expected arguments

        saveCardAnswer(answer)
    }

    render () {
        const { card, authorAvatar, timestamp, author, QuestionOne, QuestionTwo, answered, isOneAnswered, isTwoAnswered } = this.props
        const QuestionOneVotes = card.QuestionOne.votes.length
        const QuestionTwoVotes = card.QuestionTwo.votes.length
        const QuestionOnePercentage = (QuestionOneVotes / (QuestionOneVotes + QuestionTwoVotes) * 100).toFixed(2)
        const QuestionTwoPercentage = (QuestionTwoVotes / (QuestionOneVotes + QuestionTwoVotes) * 100).toFixed(2)
        return (
            <Fragment>
                <MainMenu />
                <div className='form margin card-content'>

                    <div className='card-header'>
                        <p className='card-title'>Would You Rather</p>
                    </div>
                    <div className='user-coontent'>
                            <ul className='user-navigation-menu nav nav-account block'>
                                <li className='user-content-element'>
                                    <img 
                                        src={authorAvatar}
                                        alt={`Avatar of ${author}`}
                                        className='big-sircle user-avatar vertical-align'/>
                                        <div className="user-content">
                                            <span className="padding-left">{author}</span>
                                            <span className="padding-left">{ timestamp }</span>
                                        </div>
                                  
                                </li>
                            </ul>
                    </div>
                    {
                        answered
                        ? (
                            <div className='card-wrapper no-bottom-round'>
                            <ul className='no-padding no-margin'>
                                <li className='answered-card full-width'>
                                    <span className={isOneAnswered ? 'answered' : 'none'}>{QuestionOne}</span>
                                    {isOneAnswered ? <FaCheck className='padding-left answered'/> : null}
                                    <span className='vote-result'>{`${QuestionOneVotes} vote(s) | ${QuestionOnePercentage}%`}</span>
                                </li>
                                <li className='no-padding answered-card full-width'>
                                    <div className='or-seperator'>
                                        <p className='inline-p'>OR</p>
                                    </div>
                                </li>
                                <li className='padding-bottom answered-card full-width'>
                                    <span className={isTwoAnswered ? 'answered' : 'none'}>{QuestionTwo}</span>
                                    {isTwoAnswered ? <FaCheck className='padding-left answered'/> : null}
                                    <span className='vote-result'>{`${QuestionTwoVotes} vote(s) | ${QuestionTwoPercentage}%`}</span>
                                </li>
                            </ul>
                            </div>
                        )
                        : (
                            <form onSubmit={this.submitAnswer} className='card-wrapper no-bottom-round'>
                                <div className='card-content-container'>
                                    <label className='card-option'>
                                        <span className='input_question'>{QuestionOne}</span>
                                        <input  
                                            className='hide'
                                            type="radio" 
                                            name='select_question' 
                                            value="QuestionOne"
                                            onClick={this.selectRadio}/>
                                        <span className='checkmark'></span>
                                    </label>

                                    <label className='card-option'>
                                        <span className='input_question'>{QuestionTwo}</span>
                                        <input 
                                            className='hide' 
                                            type="radio" 
                                            name='select_question' 
                                            value="QuestionTwo"
                                            onClick={this.selectRadio}/>
                                        <span className='checkmark'></span>
                                    </label>
                                </div>
                                <button className='button'>Submit</button>
                            </form>
                        ) 
                    }
                   
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({authedUser, cards, users}, props) {
    const { question_id } = props.match.params
    const card = cards[question_id]
    const authorAvatar = users[card.author].avatarURL
    const author = users[card.author].id
    const timestamp = formatDate (card.timestamp)
    const QuestionOne = card.QuestionOne.text
    const QuestionTwo = card.QuestionTwo.text
    const isOneAnswered = card.QuestionOne.votes.includes(authedUser)
    const isTwoAnswered = card.QuestionTwo.votes.includes(authedUser)
    const answered = isOneAnswered || isTwoAnswered

    return {
        authorAvatar,
        author,
        timestamp,
        QuestionOne,
        QuestionTwo,
        answered,
        isOneAnswered,
        isTwoAnswered,
        card,
        users,
        cards,
        authedUser,
        question_id,
    }
}

function mapDispatchToProps (dispatch, props) {
    const { question_id } = props.match.params
    return {
        saveCardAnswer : (answer) => {
            dispatch(handleSaveCardAnswer(question_id, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContent)