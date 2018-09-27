import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './index.css';

import MainMenu from './components/mainMenu';
import MainSection from './components/mainSection';
import PrivateComponent from './components/privateComponent';
import Login from './components/login';
import News from './components/news';
import Profile from './components/profile';
import NotFound from './components/notFound';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MainMenu className="mainMenu"/>
                <Switch>
                    <Route exact path='/' component={MainSection}/>
                    <Route path='/main' component={MainSection}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/news' component={News}/>
                    <PrivateComponent path='/profile' component={Profile}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
