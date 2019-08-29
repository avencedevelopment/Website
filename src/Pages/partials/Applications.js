 import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Applications extends Component {
    render() {
        return (
            <div className="Applications">
                <div className="container">
                    <div className="ApplicationsContent">
                        <div className="ApplicationsLeft">
                            <span>APPLICATIONS</span>
                            <h2>Application Development.</h2>
                            <p>Avence is a team of developers and designers who work closely together. We focus on the development of customized websites and web application</p>
                            <Link to="/contact" className="btn">Contact us</Link>
                        </div>
                        <div className="ApplicationsRight">
                            <img alt="#" src="./images/Applications.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Applications;