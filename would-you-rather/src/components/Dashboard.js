import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import MainMenu from './MainMenu'
import { handleInitialCards } from '../actions/shared'

class Dashboard extends Component {
    state = {
        selectedTab: 'unanswered'
    }

    componentDidMount () {
        this.props.dispatch(handleInitialCards())
    }

    render () {
        const { completedCards, uncompletedCards,loadingBar } = this.props
            return (
            <Fragment>
                <MainMenu />
                <div className="container">
                <ul className='toggle-answers'>
                    <li 
                        className={ this.state.selectedTab === 'unanswered' ? 'active' : 'li-hover'}
                        onClick={() => {this.setState({ selectedTab: 'unanswered'})}}>
                        Unanswered Questions
                    </li>
                    <li 
                        className={ this.state.selectedTab === 'answered' ? 'active' : 'li-hover'}
                        onClick={() => {this.setState({ selectedTab: 'answered'})}}>
                        Answered Questions
                    </li>
                </ul>
                {
                    !loadingBar.default && Object.keys(uncompletedCards).length === 0 && this.state.selectedTab === 'unanswered'
                    ? <p className='no-results'>no results</p>
                    : null
                }
                {
                    !loadingBar.default && Object.keys(completedCards).length === 0 && this.state.selectedTab === 'answered'
                    ? <p className='no-results'>no results</p>
                    : null
                }
                { 
                    loadingBar.default
                    ? <p className='loading'>Loading ...</p>
                    : this.state.selectedTab === 'unanswered' && Object.keys(uncompletedCards).length !== 0
                        ? <div className='question-form margin'>
                            {uncompletedCards.map((id) => (
                            <Card key={id} id={id}/> ))}
                        </div>     
                        : this.state.selectedTab === 'answered' && Object.keys(completedCards).length !== 0
                        ? <div className='question-form margin'>
                            {completedCards.map((id) => (
                            <Card key={id} id={id}/> ))}
                        </div>     
                        : null
                 }     
                 </div>        
            </Fragment>
            )
    }
}

function mapStateToProps ({ cards, authedUser, users, loadingBar }) {
    const user = users[authedUser]

    const completedCardsIdsArray =  user && Object.keys(user.answers);

    const uncompletedCardsIds = Object.keys(cards).length > 0 ? Object.keys(cards).filter(cardID => !completedCardsIdsArray.includes(cardID)) : [];

    const completedCards = completedCardsIdsArray.map((cardID) => {
        return cards[cardID];
    }).sort((a,b) => b.timestamp - a.timestamp ).map((card) => card !== undefined && card.id);
    
    const uncompletedCards = uncompletedCardsIds.map((cardID) => {
        return cards[cardID];
    }).sort((a,b) => b.timestamp - a.timestamp ).map((card) => card.id);
    
    return {
        completedCards,
        uncompletedCards,
        loadingBar,
    }
}

export default connect(mapStateToProps)(Dashboard)