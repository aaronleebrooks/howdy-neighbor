import React from 'react';
import ReactModal from 'react-modal'

import {Field, reduxForm, focus} from 'redux-form';
import Input from '../../landing-and-login/js/input';
import {postQuestion} from '../../actions/actions';

export class AddQuestionForm extends React.Component {

     onSubmit = function(values) {
        return this.props.dispatch(postQuestion(values.question, values.explain));
    }

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

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error">
                    {this.props.error}
                </div>
            );
        }

        return (
      <div>
        <button onClick={this.handleOpenModal}>Ask a Question
        </button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
            <form
                className="add-question-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="question">Question
                <Field
                    component={Input}
                    type="text"
                    name="question"
                    id="question"
                    required
                />
                </label>
                <label htmlFor="explain">Explain it
                <Field
                    component={Input}
                    type="text"
                    name="explain"
                    id="explain"
                />
                </label>
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
            <button onClick={this.handleCloseModal}>Close Question</button>
        </ReactModal>
      </div>
        );
    }
};

export default reduxForm({
    form: 'postQuestion',
    onSubmitFail: (errors, dispatch) => dispatch(focus('question', 'explain'))
})(AddQuestionForm);