import React, {Component} from 'react';

import {CheckboxGroup, Checkbox} from 'react-checkbox-group';

class CheckBoxesContainer extends Component {
    render() {
        const {itemsValue, mouseOnComponent, mouseLeaveComponent, selectedItems} = this.props;
        return (
            <CheckboxGroup
                className="checkboxesContainer"
                onMouseMove={() => mouseOnComponent()}
                onMouseLeave={() => mouseLeaveComponent()}
                onChange={(val) => selectedItems(val)}
                checkboxDepth={2}
            >
                {itemsValue.checkboxes.map((el, index) =>
                    <div key={index}>
                        <div key={index} style={{backgroundImage: `url(${el.imgSrc})`}} className="checkboxImg"/>
                        <Checkbox value={el.value} checked={el.checked}/>
                    </div>
                )}
            </CheckboxGroup>
        )
    }
}

export default CheckBoxesContainer;


