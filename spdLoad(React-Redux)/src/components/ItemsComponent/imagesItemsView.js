import React from 'react';

const ImagesItems = (props) => {
    const {images, containerIndex, selectedItems, itemsName} = props;
    return (
        <div className="itemsImagesContainer">
            {images.map((src, index) =>
                <img key={index}
                     alt=""
                     src={src}
                     onClick={() => selectedItems({
                         containerIndex: containerIndex,
                         itemsName: itemsName,
                         itemsValue: index
                     })}
                />)}
        </div>
    )
};

export default ImagesItems;
