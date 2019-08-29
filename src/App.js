import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';


class App extends Component {
    render() {
        return (
            <Route>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />

                    <Route path="/contact" component={Contact} />
                </div>
            </Route>
        );
    }
}

export default App;