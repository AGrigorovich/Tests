import React from 'react';
import {storiesOf} from '@storybook/react';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogWindow from "../components/dialogWindow";
import store from "../store/store";

storiesOf('ModalWindow', module).add('myModalWindow', () =>
    <Provider store={store}>
        <MuiThemeProvider>
            <DialogWindow/>
        </MuiThemeProvider>
    </Provider>);