import React from 'react';
import {connect} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';

const PrivateComponent = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        rest.isLogin
            ? <Component {...props} />
            : <Redirect to='/main'/>
    )}/>
);

const mapStateToProps = (state) => {
    return {
        isLogin: state.loginStore.isLogin,
    }
};

export default connect(mapStateToProps)(PrivateComponent);
