import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setCurrentUser, setAuthToken} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import '../css/nav-bar.css';

export function NavBar(props) {

    function logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }
    
    let logOutButton;
    let logInButton;
    let signUpCraftsmanButton;
    let signUpButton;

    if (props.loggedIn) {
        logOutButton = (
            <li className="right"><Link to="./" onClick={() => this.logOut()}>Log Out</Link></li>
        );
    } else {
        logInButton = (
            <li className="right">
            <Link to="../login">Login</Link></li>
        );
        signUpCraftsmanButton = (
            <li className="right">
            <Link 
            to="../register/true" 
            >Sign Up as Link Craftsman!</Link></li>
        );
        signUpButton = (
            <li className="right">
            <Link 
            to="../register/false"
            >Sign Up as Link DIY-er!</Link></li>
        );
    }
    return (
            <nav className="header-bar">
                <ul className="topnav">
                    <li><h4><Link to="../">Howdy Neighbor</Link></h4></li>
                    {logOutButton}
                    {logInButton}
                    {signUpCraftsmanButton}
                    {signUpButton}
                </ul>
            </nav>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
