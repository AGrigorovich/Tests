import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {connect} from "react-redux";

const appBarStyle = {
    backgroundColor: 'gainsboro',
    width: '100%',
    alignItems: 'center',
    borderBottom: '1px solid silver',
    borderRadius: '10px 10px 0 0'
};
const appBarTitleStyle = {
    color: 'black'
};

class DialogWindowHeader extends Component {
    closeForm = () => {
        this.props.dispatch({
            type: 'CLOSE_WINDOW',
            open: false,
        })
    };

    render() {
        return (
            <AppBar zDepth={0} title={this.props.title} showMenuIconButton={false} titleStyle={appBarTitleStyle}
                    style={appBarStyle}>
                <IconButton tooltip="Close" onClick={this.closeForm}>
                    <NavigationClose/>
                </IconButton>
            </AppBar>
        )
    }
}

function map(state) {
    return {
        title: state.itemsReducer.title
    }
}

export default connect(map)(DialogWindowHeader);