import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DialogWindowMain from './dialogWindowMain';
import DialogWindowHeader from "./dialogWindowHeader";
import CardAction from 'material-ui/Card';

const dialogWindowStyle = {
    width: '60%'
};

const addButtonStyle = {
    margin: '1em 0 1em -1em'
};

const buttonsCardStyle = {
    marginLeft: '1em'
};

class DialogWindow extends Component {
    addField = () => {
        this.props.dispatch({
            type: 'ADD_FIELD',
        })
    };

    closeForm = () => {
        this.props.dispatch({
            type: 'CLOSE_WINDOW',
            open: false,
        })
    };

    saveChanges = () => {
        this.props.dispatch({
            type: 'SAVE_CHANGES',
            open: false
        })
    };

    render() {
        return (
            <Dialog modal={true}
                    open={this.props.open}
                    style={dialogWindowStyle}
                    autoScrollBodyContent={true}>
                <DialogWindowHeader/>
                <DialogWindowMain/>
                <CardAction zDepth={0} style={buttonsCardStyle}>
                    <CardAction zDepth={0}>
                        <FlatButton label="Добавить" primary={true} onClick={this.addField}
                                    style={addButtonStyle}/>
                    </CardAction>
                    <RaisedButton label={'Сохранить'} primary={true} onClick={this.saveChanges}/>
                    <FlatButton label={"Отмена"} onClick={this.closeForm}/>
                </CardAction>
            </Dialog>

        );
    }
}

function map(state) {
    return {
        open: state.itemsReducer.open
    }
}

export default connect(map)(DialogWindow);