import React from 'react';

import RangeSlider from "./rangeSlider";
import HandsImagesItems from './handsImagesItems';

const HandsImagesContainer = (props) => {
    const {images, mouseOnComponent, mouseLeaveComponent, selectedItems, itemsValue} = props;
    return (
        <div onMouseMove={() => mouseOnComponent()}
             onMouseLeave={() => mouseLeaveComponent()}
             className="itemsContainer">
            <HandsImagesItems
                images={images}
                selectedItems={(value) => selectedItems(value)}
            />
            <RangeSlider
                itemsValue={itemsValue}
            />
        </div>
    )
};

export default HandsImagesContainer;
