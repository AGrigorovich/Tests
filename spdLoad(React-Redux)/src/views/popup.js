import React from 'react';

const Popup = (props) => {
    const {popupParams} = props;
    return (
        <React.Fragment>
            {popupParams &&
            (<div className="popup" style={{top: popupParams.offsetTopWidth}}>
                <h2>{popupParams.title}</h2>
                <p>{popupParams.text}</p>
            </div>)}
        </React.Fragment>
    )
};

export default Popup;
