import React, {Component} from 'react';
import {connect} from 'react-redux';

class ButtonsComponent extends Component {
    makeOrder = () => {
        //here we get our order and can send it to server
        let order = this.props.order;
        console.log(order)
    };
    clearOrder = () => {
        this.props.dispatch({
            type: "CLEAR_ORDER",
        });
    };

    render() {
        return (
            <div className="buttonsContainer">
                <button className="buttons" onClick={() => this.makeOrder()}>Apply</button>
                <button className="buttons" onClick={() => this.clearOrder()}>Clear</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        order: state.orderReducer.order
    }
}

export default connect(mapStateToProps)(ButtonsComponent);
