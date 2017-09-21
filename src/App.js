import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';

import NavBar from './header-and-nav/js/nav-bar';
import HeaderBar from './header-and-nav/js/header';
import LandingPage from './landing-and-login/js/landing-page';
import Dashboard from './dashboard/js/dashboard';
import LoginPage from './landing-and-login/js/login-page';
import RegistrationPage from './landing-and-login/js/register-page';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <NavBar />
                <HeaderBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register/:craftsman" component={RegistrationPage} />
            </div>
        );
    }
}

export default withRouter(App);
