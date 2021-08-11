
import React, { Component } from 'react';
import HomePage from '../homepage/homepage.component';
import About from '../about/about.component';


export default class LandingPage extends Component {
    render() {
        return (
            <>
                <HomePage />
                <About />
            </>
        )
    }
}