import React, {Component} from 'react';
import {connect} from "react-redux";

import LeafsImagesContainer from '../views/leafsImagesContainer';

import {leafsPopupParams} from '../constants/consts';

class LeafsComponent extends Component {

    selectedItems = (newValue) => {
        this.props.dispatch({
            type: "CHANGE_SELECTED_ITEMS",
            payload: {
                itemsName: 'leafsItems',
                value: newValue
            }
        });
    };

    render() {
        const {images,mouseOnComponent,  mouseLeaveComponent, itemsValue} = this.props;
        return (
            <LeafsImagesContainer
                images={images}
                mouseOnComponent={() => mouseOnComponent(leafsPopupParams)}
                mouseLeaveComponent={() => mouseLeaveComponent()}
                selectedItems={(value) => this.selectedItems(value)}
                itemsValue={itemsValue}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        itemsValue: state.orderReducer.order.leafsItems
    }
}

export default connect(mapStateToProps)(LeafsComponent);
