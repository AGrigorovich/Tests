import React, {Component} from 'react';
import {connect} from 'react-redux';

import HandsComponent from './handsComponent';
import FlowersComponent from './flowersComponent';
import LeafsComponent from './leafsComponent';
import PopupComponent from '../components/popupComponent';

import {APIURL} from '../constants/consts';

class BaseComponent extends Component {
    async componentDidMount() {
        const resp = await fetch(APIURL + 'posts');
        const dataFromApi = await resp.json();
        this.props.dispatch({
            type: "GET_DATA_FROM_API",
            data: dataFromApi
        })
    };

    mouseOnComponent = (popupParams) => {
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
        const {images, dataFromApi} = this.props;
        console.log(dataFromApi);
        return (
            <React.Fragment>
                <fieldset>
                    <legend>I AM</legend>
                    <HandsComponent
                        mouseOnComponent={(value) => this.mouseOnComponent(value)}
                        mouseLeaveComponent={() => this.mouseLeaveComponent()}
                        images={images.handsImages}
                    />
                    <FlowersComponent
                        mouseOnComponent={(value) => this.mouseOnComponent(value)}
                        mouseLeaveComponent={() => this.mouseLeaveComponent()}
                        images={images.flowersImages}
                    />
                    <LeafsComponent
                        mouseOnComponent={(value) => this.mouseOnComponent(value)}
                        mouseLeaveComponent={() => this.mouseLeaveComponent()}
                        images={images.leafsImages}
                    />
                </fieldset>
                <PopupComponent/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        images: state.orderReducer.arrayOfImages,
        dataFromApi: state.orderReducer.dataFromApi,
    }
}

export default connect(mapStateToProps)(BaseComponent);
