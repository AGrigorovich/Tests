import React, {Component} from 'react';

export default class Scan extends Component{
    componentWillMount=()=>{
        if(!localStorage.getItem('jwt')){
            this.props.history.push('/login');
        }
        else{
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: true
            })
                .then(function(mediaStream) {
                    let video = document.querySelector('video');
                    video.srcObject = mediaStream;
                    video.onloadedmetadata = function(e) {
                        video.play();
                    };
                })
                .catch(function(err) { console.log(err.name + ": " + err.message);
                });
        }
    };

    componentWillUnmount=()=>{
        let video = document.querySelector('video');

    }

    render(){
        return(
            <div>
                <video/>
            <h1>Scan</h1>
            </div>
        )
    }
}

// qrcode = require('zxing');
// qrcode.decode([uri, ]function(err, result) {
//     if (err != null) {
//         console.log(err); // Will output any errors found
//         return;
//     }
//     console.log(result); // Will output the decoded information
// });