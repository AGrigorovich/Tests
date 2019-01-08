import React from 'react';

import RangeSlider from "./rangeSlider";
import LeafsImagesItems from './leafsImagesItems';


const LeafsImagesContainer = (props) => {
    const {images, mouseOnComponent, mouseLeaveComponent, selectedItems, itemsValue} = props;
    return (
        <div onMouseMove={() => mouseOnComponent()}
             onMouseLeave={() => mouseLeaveComponent()}
             className="itemsContainer">
            <LeafsImagesItems
                images={images}
                selectedItems={(value) => selectedItems(value)}
            />
            <RangeSlider
                itemsValue={itemsValue}
            />
        </div>
    )
};

export default LeafsImagesContainer;
