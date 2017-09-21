import React from 'react';

export class LoginForm extends React.Component {
    render() {
        return (
            <form
                className="login-form"
                >
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                />
                <button>
                    Log in
                </button>
            </form>
        );
    }
};

export default LoginForm;