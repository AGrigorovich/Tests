import React from 'react';

const Popup = (props) => {
    const {popupParams} = props;
    return (
        <div className="popup" style={{top: popupParams.offsetTopWidth}}>
            <h2>{popupParams.title}</h2>
            <p>{popupParams.text}</p>
        </div>)
};

export default Popup;
