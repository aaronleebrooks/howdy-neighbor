import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';

export function RegisterForm(props) {

    function onSubmit(values) {
        const {username, password, firstName, lastName, zipCode, yearsExperience, fieldExperience} = values;
        const user = {username, password, firstName, lastName, zipCode, yearsExperience, fieldExperience};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

        let inputs;

        if (props.craftsman === false) {

        return (
            <form
                className="register-form"
                onSubmit={props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, length({min: 10, max: 72}), isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <label htmlFor="zipCode">ZIP Code</label>
                <Field
                    component={Input}
                    type="text"
                    name="ZIP Code"
                    validate={[required, nonEmpty]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
            );
        } else {
            inputs = (
            <form
                className="register-form"
                onSubmit={props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, length({min: 10, max: 72}), isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <label htmlFor="passwordConfirm">ZIP Code</label>
                <Field
                    component={Input}
                    type="text"
                    name="ZIP Code"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="yearsExperience">Years of Experience</label>
                <Field
                    component={Input}
                    type="number"
                    name="yearsExperience"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="fieldExperience">Field of Experience</label>
                <Field
                    component="select"
                    type="select"
                    name="fieldExperience"
                    validate={[required, nonEmpty]}
                >
                    <option value=""></option>
                    <option value="plumber">Plumber</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="electrician">Electrician</option>
                    <option value="mechanic">Mechanic</option>
                </Field>
                <button
                    type="submit"
                    disabled={props.pristine || props.submitting}>
                    Register
                </button>
            </form>
            );
        }

        return (
            <div>
                {inputs}
            </div>
        );
    };

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegisterForm);
