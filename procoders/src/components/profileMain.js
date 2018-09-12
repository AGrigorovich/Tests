import React from 'react';

import UserMainInfo from './userMainInfo';
import UserSocialNetwork from './userSocialNetworks';

import {Loading} from "element-react";

const ProfileMain = (props) => {
    const {isLoading, userData} = props;
    return (
        <React.Fragment>
            <h2>Profile</h2>
            <Loading text="Loading..." loading={isLoading}>
                <UserMainInfo userMainData={userData}/>
                <UserSocialNetwork userSocialNetworks={userData}/>
            </Loading>
        </React.Fragment>
    )
};

export default ProfileMain;
