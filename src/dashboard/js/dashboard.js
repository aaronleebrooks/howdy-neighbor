import React from 'react'

import QuestionPreview from './question-preview'
import SearchBar from './search-bar'
import AddQuestionForm from './add-question'


import'../css/dashboard.css'

export class Dashboard extends React.Component {
	render() {

	const fakeQuestions = [{
            question: 'How do you install a bidet?',
            explain: 'I just got a bidet off Amazon. Can I hook this up, or do I need power tools?',
            type: 'plumber',
            user: 'Tom Jones',
            timestamp: '12-25-2002',
            answers: [{
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }]
        }, {
            question: 'How do you install a bidet?',
            explain: 'I just got a bidet off Amazon. Can I hook this up, or do I need power tools?',
            type: 'plumber',
            user: 'Tom Jones',
            timestamp: '12-25-2002',
            answers: [{
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }]
        }, {
            question: 'How do you install a bidet?',
            explain: 'I just got a bidet off Amazon. Can I hook this up, or do I need power tools?',
            type: 'plumber',
            user: 'Tom Jones',
            timestamp: '12-25-2002',
            answers: [{
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }]
        }, {
            question: 'How do you install a bidet?',
            explain: 'I just got a bidet off Amazon. Can I hook this up, or do I need power tools?',
            type: 'plumber',
            user: 'Tom Jones',
            timestamp: '12-25-2002',
            answers: [{
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }, {
                answer: 'Put it on the toilet',
                user: 'Sam Kinison',
                timestamp: '12-25-2003'
            }]
        }];

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

export default Dashboard;