import React from 'react';

const UserMainInfo = (props) => {
    const {userMainData = {}} = props;
    const {city, languages = []} = userMainData;
    return (
        <React.Fragment>
            <h3>City: {city}</h3>
            <h3>Languages:</h3>
            <ul>
                {languages.map((el, index) => <li key={index} className="userLanguage">{el}</li>)}
            </ul>
        </React.Fragment>
    )
};

export default UserMainInfo;
