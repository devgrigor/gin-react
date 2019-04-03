import React, { Component } from 'react'
import Register from './user/Register';
// TODO: create component that will be responsible for showing correct component based on route

// Probably this will be built on react router - https://codeburst.io/getting-started-with-react-router-5c978f70df91

// Most likely will provide some filtering in routes as well, like authorization filter

class Router extends Component {
    render() {
        return (
            <div className="route-wrapper">
                <Register></Register>
            </div>
        );
    }
}

export default Router;