import React from 'react';

import Slider from '@material-ui/lab/Slider';

const RangeSlider = (props) => {
    const {itemsValue} = props;
    return (
            <Slider
                id="RangeInput"
                value={itemsValue}
                max={2}
            />
    )
};

export default RangeSlider;
