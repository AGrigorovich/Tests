import React, {Component} from 'react';
import {connect} from 'react-redux';

import HandsItemsComponent from './handsItemsComponent';

class BaseComponent extends Component {
    selectedItems = (newValue) => {
        this.props.dispatch({
            type: "CHANGE_SELECTED_ITEMS",
            newValue: newValue
        });
    };
    mouseOnComponent = (popupParams) => {
        this.props.dispatch({
            type: "MOUSE_ENTER_COMPONENT",
            payload: popupParams
        });
    };
    mouseLeaveComponent = () => {
        this.props.dispatch({
            type: "MOUSE_LEAVE_COMPONENT",
            popupParams: false
        });
    };

    render() {
        const {images, items} = this.props;
        return (
            <React.Fragment>
                <fieldset>
                    <legend>I AM</legend>
                    <HandsItemsComponent
                        mouseOnComponent={() => this.mouseOnComponent()}
                        mouseLeaveComponent={() => this.mouseLeaveComponent()}
                        selectedItems={(value) => this.selectedItems(value)}
                        images={images}
                        items={items}
                    />
                </fieldset>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        images: state.orderReducer.arrayOfImages,
        items: state.orderReducer.order
    }
}

export default connect(mapStateToProps)(BaseComponent);
