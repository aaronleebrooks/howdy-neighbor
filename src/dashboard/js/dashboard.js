import React from 'react'

import QuestionPreview from './question-preview'
import SearchBar from './search-bar'
import AddQuestionForm from './add-question'

import {connect} from 'react-redux';

import * as actions from '../../actions/actions';

import'../css/dashboard.css'

export class Dashboard extends React.Component {

    componentWillMount() {
        this.props.questions()
    }

	render() {
    console.log(this.props)
    const fakeQuestions = this.props.questions;
    console.log({fakeQuestions})
        const questions = fakeQuestions.map((question, index) => 
           <QuestionPreview key={index} question={question}/>
        );

        return (
                <div className="question-section">
                <SearchBar />
                <AddQuestionForm />
                {questions}
               </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        questions: store.fetchedQuestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        questions: () => {
            dispatch(actions.fetchQuestions())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)