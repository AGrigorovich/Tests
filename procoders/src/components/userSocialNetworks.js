import React from 'react';

const UserSocialNetworks = (props) => {
    const {userSocialNetworks = {}} = props;
    const {social = []} = userSocialNetworks;
    return (
        <React.Fragment>
            <h3>Links:</h3>
            <ul>
                {social.map((el, index) => <li key={index} className="userSocialNetworks"><a target='_blank'
                                                                                             href={el.link}>
                    <img src={`images/${el.label}.svg`} title={el.label} alt={el.label}/></a></li>)}
            </ul>
        </React.Fragment>
    )
};

export default UserSocialNetworks;
