import React from 'react';

import HandsImagesItems from './handsImagesItems';

const HandsImagesContainer = (props) => {
    const {images, mouseOnComponent, mouseLeaveComponent, selectedItems, itemsName} = props;
    return (
        <div onMouseMove={() => mouseOnComponent()}
             onMouseLeave={() => mouseLeaveComponent()}
             className="itemsContainer">
            <HandsImagesItems
                images={images}
                itemsName={itemsName}
                selectedItems={(value) => selectedItems(value)}
            />
        </div>
    )
};

export default HandsImagesContainer;
