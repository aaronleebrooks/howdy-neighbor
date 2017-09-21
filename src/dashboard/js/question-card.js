import React from 'react';
import ReactModal from 'react-modal'

import AddAnswerForm from './add-answer'

export class QuestionCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  
  render () {

    //map this
    const answers = this.props.question.answers.map((answer, index) =>
        <div className="answer-card">
            <h2>{answer.answer}</h2>
            <p>answered by {answer.user}</p>
            <p>on {answer.timestamp}</p>
         </div>
        );

    return (
      <div>
        <button onClick={this.handleOpenModal}>Read More</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
          <h2>{this.props.question.question}</h2>
          <p>{this.props.question.explain}</p>
          <p>asked by {this.props.question.user}</p>
          <p>on {this.props.question.timestamp}</p>
          <div className="answer-section">
            {answers}
            <AddAnswerForm />
          </div>
          <button onClick={this.handleCloseModal}>Close Question</button>
        </ReactModal>
      </div>
    );
  }
}

export default QuestionCard;