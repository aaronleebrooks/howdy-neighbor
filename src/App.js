import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

import NavBar from './header-and-nav/js/nav-bar';
import HeaderBar from './header-and-nav/js/header';
import LandingPage from './landing-and-login/js/landing-page';
import Dashboard from './dashboard/js/dashboard';
import LoginPage from './landing-and-login/js/login-page';
import RegistrationPage from './landing-and-login/js/register-page';
import {refreshAuthToken} from './actions/auth';

import './App.css';

class App extends Component {

    componentDidMount() {
        if (this.props.hasAuthToken) {
            // Try to get a fresh auth token if we had an existing one in
            // localStorage
            this.props.dispatch(refreshAuthToken());
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

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

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null
});

export default withRouter(App);
