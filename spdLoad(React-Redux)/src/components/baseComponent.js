import React, {Component} from 'react';
import {connect} from 'react-redux';

import HandsItemsComponent from './handsItemsComponent';

class BaseComponent extends Component {
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
        const {images} = this.props;
        return (
                <fieldset>
                    <legend>I AM</legend>
                    <HandsItemsComponent
                        mouseOnComponent={() => this.mouseOnComponent()}
                        mouseLeaveComponent={() => this.mouseLeaveComponent()}
                        images={images.handsImages}
                    />
                </fieldset>
        )
    }
}

function mapStateToProps(state) {
    return {
        images: state.orderReducer.arrayOfImages
    }
}

export default connect(mapStateToProps)(BaseComponent);
