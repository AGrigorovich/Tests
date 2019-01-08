import React from 'react';

import RangeSlider from "./rangeSlider";
import FlowersImagesItems from './flowersImagesItems';


const FlowersImagesContainer = (props) => {
    const {images, mouseOnComponent, mouseLeaveComponent, selectedItems, itemsValue} = props;
    return (
        <div onMouseMove={() => mouseOnComponent()}
             onMouseLeave={() => mouseLeaveComponent()}
             className="itemsContainer">
            <FlowersImagesItems
                images={images}
                selectedItems={(value) => selectedItems(value)}
            />
            <RangeSlider
                itemsValue={itemsValue}
            />
        </div>
    )
};

export default FlowersImagesContainer;
