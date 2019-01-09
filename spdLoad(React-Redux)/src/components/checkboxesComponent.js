import React, {Component} from 'react';
import {connect} from "react-redux";

import CheckBoxesContainer from '../views/checkboxesContainer';
import {checkboxPopupParams} from "../constants/consts";

class CheckBoxesComponent extends Component {
    selectedItems = (newValue) => {
        this.props.dispatch({
            type: "CHANGE_SELECTED_ITEMS",
            payload: {
                itemsName: 'checkboxes',
                value: newValue
            }
        });
    };

    render() {
        const {mouseOnComponent, mouseLeaveComponent, itemsValue} = this.props;
        return (
            <CheckBoxesContainer
                mouseOnComponent={() => mouseOnComponent(checkboxPopupParams)}
                mouseLeaveComponent={() => mouseLeaveComponent()}
                selectedItems={(value) => this.selectedItems(value)}
                itemsValue={itemsValue}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        itemsValue: state.orderReducer.defaultValue,
    }
}

export default connect(mapStateToProps)(CheckBoxesComponent);
