import React, { Component } from 'react';

import '../css/header.css';

class HeaderBar extends Component {
    render() {
        return (
            <header className="logo" role="banner">
                <h1>Howdy Neighbor!</h1>
            </header>
        );
    }
}


export default HeaderBar;
