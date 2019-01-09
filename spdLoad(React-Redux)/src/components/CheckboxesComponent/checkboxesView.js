import React from 'react';

import {CheckboxGroup, Checkbox} from 'react-checkbox-group';

const CheckBoxesContainer = (props) => {
    const {items, mouseOnComponent, mouseLeaveComponent, selectedCheckboxItems} = props;
    return (
        <CheckboxGroup
            className="checkboxesContainer"
            onMouseMove={() => mouseOnComponent('checkbox')}
            onMouseLeave={() => mouseLeaveComponent()}
            onChange={(val) => selectedCheckboxItems(val)}
            checkboxDepth={2}
        >
            {items.map((el, index) =>
                <div key={index}>
                    <div key={index} style={{backgroundImage: `url(${el.imgSrc})`}} className="checkboxImg"/>
                    <Checkbox value={el.value} checked={el.checked}/>
                </div>
            )}
        </CheckboxGroup>
    )
};

export default CheckBoxesContainer;
