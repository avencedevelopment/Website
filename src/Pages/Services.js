import React, { Component } from 'react'
import Nav from './partials/Nav';
import Websites from './partials/Websites'
import Applications from './partials/Applications'

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <Nav />
                <Websites />
                <Applications />
            </div>
        )
    }
}

export default Services;