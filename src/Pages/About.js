import React, { Component } from 'react'
import Nav from './partials/Nav';
import { Link } from 'react-router-dom';
import Partners from './partials/Partners';


class About extends Component {
    render() {
        return (
            <div className="About">
                <Nav />
                <div className="AboutContent">
                    <div className="container">
                        <div className="AboutBox">
                            <span>GET TO KNOW US</span>
                            <h2>We are a creative group. We convert your wishes and needs into websites and applications.</h2>
                            <p>Avence is a team of developers and designers who work closely together. We focus on the development of customized websites and web application Because we are aware of the latest trends, you can count on a properly functioning website that is suitable for every screen. By combining your wishes with our qualities, we can successfully realize your project. By means of short communication lines between customer and developer, we can provide you with your wishes quickly and efficiently. </p>
                            <p className="plast">Avence arose from the will to do business. We invest all our time and energy in further developing our services and qualities. Because we are a small team you always approach us personally. Avence has been established to continue to give customers a personal experience.</p>
                            <Link className="btn" to="/contact">Contact us</Link>
                        </div>
                        <div className="AboutBoxInfo">
                            <div className="ContactInfoText">
                                <svg id="baseline-location_on-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path id="Path_1243" data-name="Path 1243" d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2Zm0,9.5A2.5,2.5,0,1,1,14.5,9,2.5,2.5,0,0,1,12,11.5Z" fill="#fff" /> <path id="Path_1244" data-name="Path 1244" d="M0,0H24V24H0Z" fill="none" /> </svg>
                                <p>Bakemaveld 1, 2992 HL</p>
                            </div>
                            <div className="ContactInfoText">
                                <svg id="baseline-email-24px_1_" data-name="baseline-email-24px (1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path id="Path_1247" data-name="Path 1247" d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z" fill="#fff" /> <path id="Path_1248" data-name="Path 1248" d="M0,0H24V24H0Z" fill="none" /> </svg>
                                <p>hello@avence.nl</p>
                            </div>
                            <div className="ContactInfoText">
                                <svg id="grid-world" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"> <path id="Path_1249" data-name="Path 1249" d="M20.975,9.8A10.5,10.5,0,0,0,11.2.024V0H9.8V.024A10.5,10.5,0,0,0,.024,9.8H0v1.4H.024A10.5,10.5,0,0,0,9.8,20.975V21h1.4v-.025A10.5,10.5,0,0,0,20.975,11.2H21V9.8ZM6.573,2.289A11.131,11.131,0,0,0,4.927,5.6h-2.1A9.148,9.148,0,0,1,6.573,2.289ZM2.1,7H4.558a16.626,16.626,0,0,0-.344,2.8H1.427A9.021,9.021,0,0,1,2.1,7Zm-.671,4.2H4.214A16.626,16.626,0,0,0,4.558,14H2.1A9.021,9.021,0,0,1,1.427,11.2Zm1.4,4.2h2.1a11.1,11.1,0,0,0,1.648,3.311A9.138,9.138,0,0,1,2.829,15.4ZM9.8,19.51c-1.439-.385-2.678-1.931-3.43-4.11H9.8ZM9.8,14H5.977a15.647,15.647,0,0,1-.363-2.8H9.8Zm0-4.2H5.614A15.647,15.647,0,0,1,5.977,7H9.8Zm0-4.2H6.37C7.122,3.42,8.361,1.875,9.8,1.491Zm8.371,0H16.076a11.1,11.1,0,0,0-1.649-3.311A9.157,9.157,0,0,1,18.171,5.6ZM11.2,1.491c1.438.384,2.678,1.929,3.43,4.109H11.2ZM11.2,7h3.822a15.773,15.773,0,0,1,.364,2.8H11.2Zm0,4.2h4.186a15.519,15.519,0,0,1-.364,2.8H11.2Zm0,8.31V15.4h3.43C13.878,17.58,12.638,19.125,11.2,19.51Zm3.227-.8A11.185,11.185,0,0,0,16.076,15.4h2.094A9.147,9.147,0,0,1,14.427,18.711ZM18.9,14H16.442a16.626,16.626,0,0,0,.344-2.8h2.786A8.981,8.981,0,0,1,18.9,14ZM16.786,9.8A16.626,16.626,0,0,0,16.442,7H18.9a9.021,9.021,0,0,1,.671,2.8Z" fill="#fff" /> </svg>
                                <p> www.avence.nl</p>
                            </div>
                            <div className="ContactInfoText">
                                <svg id="baseline-phone_iphone-24px_1_" data-name="baseline-phone_iphone-24px (1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path id="Path_1245" data-name="Path 1245" d="M15.5,1h-8A2.5,2.5,0,0,0,5,3.5v17A2.5,2.5,0,0,0,7.5,23h8A2.5,2.5,0,0,0,18,20.5V3.5A2.5,2.5,0,0,0,15.5,1Zm-4,21A1.5,1.5,0,1,1,13,20.5,1.5,1.5,0,0,1,11.5,22ZM16,18H7V4h9Z" fill="#fff" /> <path id="Path_1246" data-name="Path 1246" d="M0,0H24V24H0Z" fill="none" /> </svg>
                                <p>+31 6 40 95 19 25</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AboutInstagram">
                    <div className="container">
                        <div className="AboutInstagramContent">
                            <img alt="#" src={"images/ing.png"} />
                            <img alt="#" src={"images/ing.png"} />
                            <img alt="#" src={"images/ing.png"} />
                            <img alt="#" src={"images/ing.png"} />
                            <img alt="#" src={"images/ing.png"} />
                        </div>
                        <a className="btnlink" href="www.google.com">Take a look at our Instagram Profile!</a>
                    </div>
                </div>
                <Partners />
            </div>
        )
    }
}

export default About;