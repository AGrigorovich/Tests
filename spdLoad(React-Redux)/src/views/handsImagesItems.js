import React from 'react';

const HandsImagesItems = (props) => {
    const {itemsName, images, selectedItems} = props;
    return (
        <div className="itemsImagesContainer">
            {images.map((src, index) =>
                <img key={index}
                     alt=""
                     src={src}
                     onClick={() => selectedItems({newValue:itemsName,index})}
                />)}
        </div>
    )
};

export default HandsImagesItems;
