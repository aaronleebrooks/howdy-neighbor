import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav-bar.css';

export function NavBar(props) {
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


export default NavBar;
