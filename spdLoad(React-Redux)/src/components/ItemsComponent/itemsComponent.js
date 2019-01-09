import React from 'react';

import ItemsContainer from './itemsContainerView';

const ItemsComponent = (props) => {
    const {items, mouseOnComponent, mouseLeaveComponent, selectedItems} = props;
    return (
        <React.Fragment>
            {Object.values(items).map((el, index) =>
                <ItemsContainer key={index}
                                images={el.images}
                                containerIndex={index}
                                itemsValue={el.itemsValue}
                                mouseOnComponent={(itemsName) => mouseOnComponent(itemsName)}
                                mouseLeaveComponent={() => mouseLeaveComponent()}
                                selectedItems={(value) => selectedItems(value)}
                                itemsName={el.itemsName}
                />)}
        </React.Fragment>
    )
};

export default ItemsComponent;
