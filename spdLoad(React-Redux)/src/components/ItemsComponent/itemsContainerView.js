import React from 'react';

import RangeSlider from "../../components/RangeInputComponent/rangeSliderView";
import ImagesItems from './imagesItemsView';

const ItemsContainer = (props) => {
    const {images, containerIndex, itemsValue, itemsName, mouseOnComponent, mouseLeaveComponent, selectedItems} = props;
    return (
        <div onMouseEnter={() => mouseOnComponent(itemsName)}
             onMouseLeave={() => mouseLeaveComponent()}
             className="itemsContainer">
            <ImagesItems
                images={images}
                selectedItems={(value) => selectedItems(value)}
                containerIndex={containerIndex}
                itemsName={itemsName}
            />
            <RangeSlider
                itemsValue={itemsValue}
            />
        </div>
    )
};

export default ItemsContainer;
