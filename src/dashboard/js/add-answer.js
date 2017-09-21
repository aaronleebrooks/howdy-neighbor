import React from 'react'

export class AddAnswerForm extends React.Component {
      render () {
        return (
      <div>
            <form
                className="login-form"
                >
                <label htmlFor="answer">What do you think?
                <input
                    type="text"
                    name="answer"
                    id="answer"
                    required
                />
                </label>
                <button>
                    Submit
                </button>
            </form>
      </div>
        );
    }
};

export default AddAnswerForm;