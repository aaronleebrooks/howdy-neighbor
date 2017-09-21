import React from 'react';
import ReactModal from 'react-modal'

export class AddQuestionForm extends React.Component {
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
        return (
      <div>
        <button onClick={this.handleOpenModal}>Ask a Question</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
            <form
                className="login-form"
                >
                <label htmlFor="question">Question
                <input
                    type="text"
                    name="question"
                    id="question"
                    required
                />
                </label>
                <label htmlFor="explain">Explain it
                <input
                    type="explain"
                    name="explain"
                    id="explain"
                />
                </label>
                <button>
                    Submit
                </button>
            </form>
            <button onClick={this.handleCloseModal}>Close Question</button>
        </ReactModal>
      </div>
        );
    }
};

export default AddQuestionForm;