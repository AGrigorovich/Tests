import React, {Component} from 'react';
import {connect} from 'react-redux';

import ItemsComponent from '../../components/ItemsComponent/itemsComponent';
import CheckBoxesComponent from '../../components/CheckboxesComponent/checkboxesComponent';
import PopupComponent from '../../components/PopupComponent/popupComponent';
import ButtonsComponent from '../../components/ButtonsComponent/buttonsComponent';

import {APIURL} from '../../constants/consts';
import {handsPopupParams, flowersPopupParams, leafsPopupParams, checkboxPopupParams} from '../../constants/consts';

class BaseComponent extends Component {
    async componentDidMount() {
        const resp = await fetch(APIURL + 'posts');
        const dataFromApi = await resp.json();
        this.props.dispatch({
            type: "GET_DATA_FROM_API",
            data: dataFromApi
        })
    };

    selectedItems = (newValue) => {
        this.props.dispatch({
            type: "CHANGE_SELECTED_ITEMS",
            payload: newValue
        });
    };

    selectedCheckboxItems = (newValue) => {
        this.props.dispatch({
            type: "CHANGE_CHECKBOX_ITEMS",
            payload: newValue
        });
    };

    mouseOnComponent = (itemsName) => {
        let popupParams = '';
        switch (itemsName) {
            case 'handsItem':
                popupParams = handsPopupParams;
                break
            case 'flowersItem':
                popupParams = flowersPopupParams;
                break;
            case 'leafsItems':
                popupParams = leafsPopupParams;
                break;
            case 'checkbox':
                popupParams = checkboxPopupParams;
                break;
            default:
                popupParams = {title: 'DEFAULT', text: 'Some text', offsetTopWidth: '50%'}
        }
        this.props.dispatch({
            type: "MOUSE_ENTER_COMPONENT",
            payload: popupParams
        });
    };

    mouseLeaveComponent = () => {
        this.props.dispatch({
            type: "MOUSE_LEAVE_COMPONENT",
            popupParams: false
        });
    };

    render() {
        const {items, checkboxItems, dataFromApi, popupParams} = this.props;
        console.log(dataFromApi);
        return (
            <React.Fragment>
                <fieldset>
                    <legend>I AM</legend>
                    <ItemsComponent
                        items={items}
                        mouseOnComponent={(itemsName) => this.mouseOnComponent(itemsName)}
                        mouseLeaveComponent={() => this.mouseLeaveComponent()}
                        selectedItems={(value) => this.selectedItems(value)}
                    />
                    <CheckBoxesComponent
                        mouseOnComponent={(itemsName) => this.mouseOnComponent(itemsName)}
                        mouseLeaveComponent={() => this.mouseLeaveComponent()}
                        selectedCheckboxItems={(value) => this.selectedCheckboxItems(value)}
                        items={checkboxItems}
                    />
                    <ButtonsComponent/>
                </fieldset>
                {popupParams &&
                <PopupComponent popupParams={popupParams}/>}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.orderReducer.defaultValues,
        dataFromApi: state.orderReducer.dataFromApi,
        checkboxItems: state.orderReducer.checkboxesDefaultValue,
        popupParams: state.orderReducer.popupParams
    }
}

export default connect(mapStateToProps)(BaseComponent);
