import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import MainMenu from './MainMenu'
import { handleAddCard } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class AddCard extends Component {
    state = {
        QuestionOne: '',
        QuestionTwo: '',
        toHome: false,
    }
    
    handleQuestionOne = (e) => {
        this.setState({
            QuestionOne: e.target.value
        })
    }

    handleQuestionTwo = (e) => {
        this.setState({
            QuestionTwo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { QuestionOne, QuestionTwo} = this.state
        this.props.addCard(QuestionOne, QuestionTwo)
        this.setState(() => ({
            toHome: true
        }))
    }

    render () {
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <Fragment>
                <MainMenu />
                <div className='form margin card-content'>
                    <div className='card-header'>
                        <p className='card-title'>Would You Rather</p>
                    </div>
                {
                    <form onSubmit={this.handleSubmit} className='add-card-content'>
                        <div className='input-text-container'>
                            <textarea  
                                className='block input-text' 
                                name="QuestionOne" 
                                placeholder='Question One'
                                required
                                spellCheck="false"
                                onChange={this.handleQuestionOne}
                                />

                            <textarea  
                                className='block input-text' 
                                name="QuestionTwo"
                                placeholder='Question Two'
                                required
                                spellCheck="false"
                                onChange={this.handleQuestionTwo}
                                />
                        </div>

                        <button className='button'>Submit</button>
                    </form>
                }
                </div>
            </Fragment>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addCard: (QuestionOne, QuestionTwo) => {
            dispatch(handleAddCard(QuestionOne, QuestionTwo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddCard)