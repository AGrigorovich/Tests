import React from 'react';

import CheckBoxesContainer from './checkboxesView';

const CheckBoxesComponent = (props) => {
    const {items, mouseOnComponent, mouseLeaveComponent, selectedCheckboxItems} = props;
    return (
        <CheckBoxesContainer
            mouseOnComponent={(itemsName) => mouseOnComponent(itemsName)}
            mouseLeaveComponent={() => mouseLeaveComponent()}
            selectedCheckboxItems={(value) => selectedCheckboxItems(value)}
            items={items}
        />
    )
};

export default CheckBoxesComponent;
