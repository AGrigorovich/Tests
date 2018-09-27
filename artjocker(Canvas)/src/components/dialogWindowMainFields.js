import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import ContentClear from 'material-ui/svg-icons/content/clear';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';

const fieldStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row'
};

const selectBoxStyle = {
    width: '30%',
    margin: '0 1em 0 1em'
};

const textFieldStyle = {
    width: '10%'
};

const deleteFieldButtonStyle = {
    margin: '0 0 0.5em 1em'
};

const deleteFieldButtonIconStyle = {
    fill: 'red',
    width: '80%'
};

class DialogWindowMainFields extends Component {
    deleteField = (index) => {
        this.props.dispatch({
            type: 'DELETE_FIELD',
            index: index,
        })
    };

    changeInputValue = (index, event) => {
        this.props.dispatch({
            type: 'CHANGE_INPUT_VALUE',
            index: index,
            newValue: event.target.value
        })
    };

    changeSelectValue = (index, event) => {
        this.props.dispatch({
            type: 'CHANGE_SELECT_VALUE',
            index: index,
            newValue: event.target.innerText
        })
    };

    render() {
        return (
            <Card zDepth={0}>{this.props.items.map((element, index) =>
                <Paper zDepth={0} key={index} style={fieldStyle}>
                    <SelectField floatingLabelText={this.props.items[index].select}
                                 onChange={this.changeSelectValue.bind(this, index)}
                                 style={selectBoxStyle}>
                        {this.props.options.map((element, index) =>
                            <MenuItem key={index} value={this.props.options[index]}
                                      primaryText={this.props.options[index]}/>)}
                    </SelectField>
                    <TextField value={this.props.items[index].number || ''}
                               onChange={this.changeInputValue.bind(this, index)}
                               id={`${index}`} type={'number'} style={textFieldStyle}/>
                    <FloatingActionButton mini={true} zDepth={0} style={deleteFieldButtonStyle}
                                          backgroundColor={'mistyRose'}
                                          onClick={this.deleteField.bind(this, index)}>
                        <ContentClear style={deleteFieldButtonIconStyle}/>
                    </FloatingActionButton>
                </Paper>)}
            </Card>
        )
    }
}

function map(state) {
    return {
        items: state.itemsReducer.items,
        options: state.itemsReducer.options
    }
}

export default connect(map)(DialogWindowMainFields);
