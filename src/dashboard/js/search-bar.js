import React from 'react';
import {Link} from 'react-router-dom';
import '../css/search-bar.css';

export function SearchBar(props) {
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
            <nav className="search-bar">
                <ul className="searchnav">
                    <li><h4><Link to="../Dashboard">All Questions</Link></h4></li>
                    <li>
                        <h4><Link to="../Dashboard">Car Problems</Link></h4>
                    </li>

                    <li>
                        <h4><Link to="../Dashboard">Plumbing Problems</Link></h4>
                    </li>

                    <li>
                        <h4><Link to="../Dashboard">Electrical Problems</Link></h4>
                    </li>

                    <li>
                        <h4><Link to="../Dashboard">Carpentry Problems</Link></h4>
                    </li>
                </ul>
                /*// sadseachForm />*/
            </nav>
    );
}


export default SearchBar;