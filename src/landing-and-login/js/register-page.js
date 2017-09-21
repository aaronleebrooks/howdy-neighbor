import React from 'react';
import {Link} from 'react-router-dom';

import RegisterForm from './register-form';
import InfoColumn from './info-column';

import '../css/register-page.css';

export class RegistrationPage extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        let form;

        if (this.props.craftsman === false) {
            form = (
                <div>
                    <InfoColumn craftsman="false" />
                    <RegisterForm craftsman="false" />
                </div>
            );
        } else {
            form = (
                <div>
                    <InfoColumn craftsman="true"/>
                    <RegisterForm craftsman="true"/>
                </div>
            );
        }

        return (
            <div className="home">
                <h2>Be One of Our DIY-ers!</h2>
                {form}
                <footer className="logIn">
                    <p><Link to="/login">Go ahead and Login!</Link></p>
                </footer>
            </div>
        );
    }
}

export default RegistrationPage;