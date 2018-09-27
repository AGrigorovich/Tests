import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogWindow from './components/dialogWindow';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <DialogWindow/>
                </MuiThemeProvider>
            </div>
        );
    }
}