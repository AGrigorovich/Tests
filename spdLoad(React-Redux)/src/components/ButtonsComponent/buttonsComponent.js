import React, {Component} from 'react';
import {connect} from 'react-redux';

class ButtonsComponent extends Component {
    makeOrder = () => {
        //here we get our order and can send it to server
        let order = this.props.order;
        let makeOrder = this.props.makeOrder;
        let userOrder = Object.assign({}, order, makeOrder, {checkboxes: Object.assign(order.checkboxes, makeOrder.checkboxes)});
        console.log(userOrder);
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
        order: state.orderReducer.order,
        makeOrder: state.makeOrderReducer.order
    }
}

export default connect(mapStateToProps)(ButtonsComponent);
