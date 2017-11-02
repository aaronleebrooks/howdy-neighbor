import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import LoginForm from './login-form';

import '../css/login-page.css';


export class LoginPage extends React.Component {
    render() {
        return (
            <main>
                <LoginForm />
            <footer className="logIn">
                <p><Link to="/craftsman-register">Sign up as a Craftsman!</Link> or <Link to="/register">Sign up as a DIY-er!</Link></p>
            </footer>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
