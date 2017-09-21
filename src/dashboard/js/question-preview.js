import React from 'react';

import QuestionCard from './question-card'

import'../css/question-preview.css'

class QuestionPreview extends React.Component {
    render() {

        let question = this.props.question;

        return (
            <div className="question-card">
                <h2>{question.question}</h2>
                <p>asked by {question.user}</p>
                <p>on {question.timestamp}</p>
                <p>{question.answers.length} answers</p>
                <QuestionCard question={question} />
             </div>
             );
    }
}

export default QuestionPreview;
