import React, {Component} from 'react';
import {connect} from "react-redux";

import FlowersImagesContainer from '../views/flowersImagesContainer';
import {flowersPopupParams} from "../constants/consts";

class FlowersComponent extends Component {

    selectedItems = (newValue) => {
        this.props.dispatch({
            type: "CHANGE_SELECTED_ITEMS",
            payload: {
                itemsName: 'flowersItem',
                value: newValue
            }
        });
    };

    render() {
        const {images, mouseOnComponent, mouseLeaveComponent, itemsValue} = this.props;
        return (
            <FlowersImagesContainer
                images={images}
                mouseOnComponent={() => mouseOnComponent(flowersPopupParams)}
                mouseLeaveComponent={() => mouseLeaveComponent()}
                selectedItems={(value) => this.selectedItems(value)}
                itemsValue={itemsValue}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        itemsValue: state.orderReducer.order.flowersItem
    }
}

export default connect(mapStateToProps)(FlowersComponent);
