import React from 'react';

const LeafsImagesItems = (props) => {
    const {images, selectedItems} = props;
    return (
        <div className="itemsImagesContainer">
            {images.map((src, index) =>
                <img key={index}
                     alt=""
                     src={src}
                     onClick={() => selectedItems(index)}
                />)}
        </div>
    )
};

export default LeafsImagesItems;
