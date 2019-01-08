import React, {Component} from 'react';
import {connect} from "react-redux";

import HandsImagesContainer from '../views/handsImagesContainer';
import {handsPopupParams} from "../constants/consts";

class HandsComponent extends Component {

    selectedItems = (newValue) => {
        this.props.dispatch({
            type: "CHANGE_SELECTED_ITEMS",
            payload: {
                itemsName: 'handsItem',
                value: newValue
            }
        });
    };

    render() {
        const {images, mouseOnComponent, mouseLeaveComponent, itemsValue} = this.props;
        return (
            <HandsImagesContainer
                images={images}
                mouseOnComponent={() => mouseOnComponent(handsPopupParams)}
                mouseLeaveComponent={() => mouseLeaveComponent()}
                selectedItems={(value) => this.selectedItems(value)}
                itemsValue={itemsValue}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        itemsValue: state.orderReducer.order.handsItem
    }
}

export default connect(mapStateToProps)(HandsComponent);
