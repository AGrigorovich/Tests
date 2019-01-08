import React, {Component} from 'react';

import HandsImagesContainer from '../views/handsImagesContainer';

class HandsItemsComponent extends Component {
    render() {
        const {images, items, mouseLeaveComponent, mouseOnComponent, selectedItems} = this.props;
        return (
            <HandsImagesContainer
                images={images}
                items={items}
                mouseOnComponent={() => mouseOnComponent()}
                mouseLeaveComponent={() => mouseLeaveComponent()}
                selectedItems={(value) => selectedItems(value)}
            />
        )
    }
}

export default HandsItemsComponent;
