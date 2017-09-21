import React from 'react';

export function RegisterForm(props) {
        let inputs;

        if (props.craftsman === false) {
            inputs = (
            <form
                className="register-form"
                >
                <label htmlFor="firstName">First name
                <input
                    type="text"
                    name="firstName"
                />
                </label>
                <label htmlFor="lastName">Last name
                <input
                    type="text"
                    name="lastName"
                />
                </label>
                <label htmlFor="username">Username
                <input
                    type="text"
                    name="username"
                />
                </label>
                <label htmlFor="password">Password
                <input
                    type="password"
                    name="password"
                />
                </label>
                <label htmlFor="passwordConfirm">Confirm password
                <input
                    type="password"
                    name="passwordConfirm"
                />
                </label>
                <label htmlFor="passwordConfirm">ZIP Code
                <input
                    type="text"
                    name="ZIP Code"
                />
                </label>
                <label htmlFor="yearsExperience">Years of Experience
                <input
                    type="number"
                    name="yearsExperience"
                />
                </label>
                <label htmlFor="fieldExperience">input of Experience
                <input
                    type="select"
                    name="fieldExperience"
                >
                    <option value=""></option>
                    <option value="plumber">Plumber</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="electrician">Electrician</option>
                    <option value="mechanic">Mechanic</option>
                </input>
                </label>
                <button
                    type="submit"
                    >
                    Register
                </button>
            </form>
            );
        } else {
            inputs = (
            <form
                className="register-form"
                >
                <label htmlFor="firstName">First name
                <input
                    type="text"
                    name="firstName"
                />
                </label>
                <label htmlFor="lastName">Last name
                <input
                    type="text"
                    name="lastName"
                />
                </label>
                <label htmlFor="username">Username
                <input
                    type="text"
                    name="username"
                />
                </label>
                <label htmlFor="password">Password
                <input
                    type="password"
                    name="password"
                />
                </label>
                <label htmlFor="passwordConfirm">Confirm password
                <input
                    type="password"
                    name="passwordConfirm"
                />
                </label>
                <label htmlFor="passwordConfirm">ZIP Code
                <input
                    type="text"
                    name="ZIP Code"
                />
                </label>
                <button
                    type="submit"
                    >
                    Register
                </button>
            </form>
            );
        }

        return (
            <form
                className="register-form"
                >
                <label htmlFor="firstName">First name
                <input
                    type="text"
                    name="firstName"
                />
                </label>
                <label htmlFor="lastName">Last name
                <input
                    type="text"
                    name="lastName"
                />
                </label>
                <label htmlFor="username">Username
                <input
                    type="text"
                    name="username"
                />
                </label>
                <label htmlFor="password">Password
                <input
                    type="password"
                    name="password"
                />
                </label>
                <label htmlFor="passwordConfirm">Confirm password
                <input
                    type="password"
                    name="passwordConfirm"
                />
                </label>
                <label htmlFor="passwordConfirm">ZIP Code
                <input
                    type="text"
                    name="ZIP Code"
                />
                </label>
                <button
                    type="submit"
                    >
                    Register
                </button>
            </form>
        );
    };

export default RegisterForm;