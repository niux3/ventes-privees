import React, { Component } from 'react';
import CharactersIndex from './Characters/CharactersIndex';
import CharacterShow from './Characters/CharacterShow';
import {hashHistory, Router, Route} from "react-router";


class App extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={CharactersIndex} />
                <Route path="/character/show/:id/:name" component={CharacterShow} />
            </Router>                
        );
    }
}

export default App;
