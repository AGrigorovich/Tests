import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUserProfileDataFromApi} from '../actions/profileActions';

import ProfileMain from './profileMain';

class Profile extends Component {

    componentDidMount = () => {
        this.props.getUserData(this.props.userId);
    };

    render() {
        const {isLoading, userData} = this.props;
        return (
            <ProfileMain userData={userData} isLoading={isLoading}/>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.profileStore.error,
    userId: state.loginStore.userId,
    userData: state.profileStore.userData,
    isLoading: state.profileStore.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    getUserData: (userId) => {
        dispatch(getUserProfileDataFromApi(userId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
