import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import DialogWindowMainFields from './dialogWindowMainFields';

export default class DialogWindowMain extends Component {
    render() {
        return (
            <Paper zDepth={0}>
                <List>
                    <DialogWindowMainFields/>
                </List>
            </Paper>
        )
    }
}
