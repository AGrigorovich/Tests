import React, {Component} from 'react';

export default class Result extends Component{
    componentWillMount=()=>{
        console.log('result');
    }
    render(){
        return(
            <h1>Result</h1>
        )
    }
}