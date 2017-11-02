import React, { Component } from 'react';

import '../css/landing-page.css';

class LandingPage extends Component {
    render() {
        return (
        <main>
            <div className="diyer info">
                <h1>Hobbyists</h1>
                <div className="example-card">
                    <img src="http://clipartandscrap.com/wp-content/uploads/2017/06/Wood-clip-art-free-clipart-images-3.png" alt="cats"></img>
                    <h3>Got a leaky O-Ring?</h3>
                    <p>Get your questions answered by a plumber who does this 20 times a day.</p>
                </div>
                <div className="example-card">
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/14/32/pliers-148420_960_720.png" alt="cats"></img>
                    <h3>Promised your kids a treehouse?</h3>
                    <p>Find a carpenter who can let you know how to keep them safe.</p>
                </div>
                <div className="example-card">
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/14/32/carpenter-148424_960_720.png" alt="cats"></img>
                    <h3>Car sounding more like your lawnmower?</h3>
                    <p>Talk to an honest mechanic you can trust.</p>
                </div>
            </div>
            <div className="craftsmen info">
                <h1>Craftsmen</h1>
                <div className="example-card">
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/14/33/hatchet-148474_960_720.png" alt="cats"></img>
                    <h3>Share your craft</h3>
                    <p>Be able to help teach the next generation of your craft.</p>
                </div>
                <div className="example-card">
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/14/32/hammer-148417_960_720.png" alt="cats"></img>
                    <h3>Show your stuff</h3>
                    <p>Flex your skills and show that you are a master of your craft.</p>
                </div>
                <div className="example-card">
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/14/33/planer-148469_960_720.png" alt="cats"></img>
                    <h3>Connect with your clients</h3>
                    <p>Help your business gain long-term trust and respect within your community</p>
                </div>
            </div>
        </main>
        );
    } 
}

export default LandingPage;
