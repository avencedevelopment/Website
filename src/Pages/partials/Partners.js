import React, { Component } from 'react'

class Partners extends Component {
    render() {
        return (
            <div className="Partners">
                <div className="container">
                    <span>PARTNERS & TOOLS</span>
                    <h2>These partners and tools help us reach our goals.</h2>
                    <div className="PartnersLogos">
                            <img alt="#" src={"images/google.png"} />
                            <img alt="#" src={"images/jortt.png"} />
                            <img alt="#" src={"images/PayPal.png"} />
                            <img alt="#" src={"images/Asana.png"} />
                            <img alt="#" src={"images/AWS.png"} />
                            <img alt="#" src={"images/Github.png"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Partners;