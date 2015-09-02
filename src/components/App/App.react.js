import './App.scss';
import React from 'react';
import Router from 'react-router';

var RouteHandler = Router.RouteHandler;

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className='app-wrap'>
                <header></header>
                <div className='app-content'>
                    <RouteHandler {...this.props} />
                </div>
            </div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
