import React from 'react';

import Popup from './popupView';

const PopupComponent = (props) => {
    const {popupParams} = props;
    return (
        <Popup
            popupParams={popupParams}
        />
    )
};

export default PopupComponent;
