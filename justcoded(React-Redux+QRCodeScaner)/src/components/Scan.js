import React, {Component} from 'react';

import ScanVideo from './ScanVideo';

import Instascan from 'instascan';

export default class Scan extends Component {

    componentDidMount = () => {
        if (!localStorage.getItem('jwt')) {
            this.props.history.push('/login');
        }
        else {
            try {
                let scanner = new Instascan.Scanner({video: document.querySelector('video')});
                scanner.addListener('scan', (content) => {
                    scanner.stop();
                    this.props.history.push(`/result/${content}`);
                });
                Instascan.Camera.getCameras()
                    .then(function (cameras) {
                        if (cameras.length > 0) {
                            scanner.start(cameras[0]);
                        } else {
                            console.error('No cameras found.');
                        }
                    })
                    .catch(function (e) {
                        console.error(e);
                    });
            }
            catch (e) {
                console.log(e);
            }
        }
    };

    componentWillUnmount = () => {
        //here we can stop camera if we need
    };

    render() {
        return (
            <ScanVideo/>
        )
    }
}
