import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Websites extends Component {
    render() {
        return (
            <div className="Websites">
                <div className="container">
                    <div className="WebsitesContent">
                        <div className="WebsitesLeft">
                            <img alt="#" src="./images/Websites.png"></img>
                        </div>
                        <div className="WebsitesRight">
                            <span>WEBSITES</span>
                            <h2>Website Development.</h2>
                            <p>Avence is a team of developers and designers who work closely together. We focus on the development of customized websites and web application</p>
                            <Link to="/contact" className="btn">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Websites;
