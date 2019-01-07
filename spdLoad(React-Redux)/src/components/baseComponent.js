import React, {Component} from 'react';
import {connect} from 'react-redux';

import HandsItemsComponent from './handsItemsComponent';

class BaseComponent extends Component {
    selectedItems = (newValue) => {
        this.props.dispatch({
            type: "CHANGE_SELECTED_ITEMS",
            itemsName: newValue.items,
            itemsValue: newValue.index
        });
    };
    mouseOnComponent = (popupParams) => {
        debugger
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
        const {images} = this.props;
        return (
            <React.Fragment>
                <fieldset>
                    <legend>I AM</legend>
                    <HandsItemsComponent
                        mouseOnComponent={()=>this.mouseOnComponent()}
                        mouseLeaveComponent={()=>this.mouseLeaveComponent()}
                        selectedItems={(value)=>this.selectedItems(value)}
                        images={images}
                    />
                </fieldset>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        images: state
    }
}

export default connect(mapStateToProps)(BaseComponent);
