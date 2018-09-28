import React, {Component} from 'react';

import Video from '../components/Video';

import Instascan from 'instascan';

let localStreamVideo = '';

export default class Scan extends Component {
    componentWillMount = () => {
        if (!localStorage.getItem('jwt')) {
            this.props.history.push('/login');
        }
        else {
            let scanner = new Instascan.Scanner({ video: document.querySelector('video') });
            scanner.addListener('scan', function (content) {
                console.log(content);
            });
            Instascan.Camera.getCameras().then(function (cameras) {
                if (cameras.length > 0) {
                    scanner.start(cameras[0]);
                } else {
                    console.error('No cameras found.');
                }
            }).catch(function (e) {
                console.error(e);
            });
            // navigator.mediaDevices.getUserMedia({
            //     audio: false,
            //     video: true
            // })
            //     .then(function (mediaStream) {
            //         let video = document.querySelector('video');
            //         video.srcObject = mediaStream;
            //         video.onloadedmetadata = () => {
            //             video.play();
            //         };
            //         localStreamVideo = mediaStream;
            //     })
            //     .catch(function (err) {
            //         console.log(err.name + ": " + err.message);
            //     });
        }
    };

    componentWillUnmount = () => {
        // if (localStreamVideo.active) {
        //     localStreamVideo.getVideoTracks()[0].stop();
        // }
    };

    render() {
        return (
            <Video/>
        )
    }
}
