import React, {Component} from 'react';
import {connect} from 'react-redux';

import Popup from '../views/popup';

class PopupComponent extends Component {

    render() {
        const {popupParams} = this.props;
        return (
            <Popup
                popupParams={popupParams}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        popupParams: state.orderReducer.popupParams
    }
}

export default connect(mapStateToProps)(PopupComponent);
