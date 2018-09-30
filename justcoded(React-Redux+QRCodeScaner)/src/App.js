import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import TopMenu from './components/TopMenu';
import Login from './components/Login';
import Scan from './components/Scan';
import Result from './components/Result';
import Main from './components/Main';
import NotFound from './components/NotFound';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/scan' component={Scan}/>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/result/:res' component={Result}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
