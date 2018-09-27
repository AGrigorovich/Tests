import React, {Component} from 'react';
import {connect} from "react-redux";

import {Notification} from 'element-react';

import NewsItem from './newsItem';

import {getNewsFromAPI} from '../actions/newsActions';

class News extends Component {

    componentDidMount = () => {
        this.props.getNews();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.error !== this.props.error) {
            this.props.error && Notification({
                title: "Something went wrong",
                message: this.props.error,
                type: "error"
            })
        }
    }

    render() {
        const {isLoading, news} = this.props;
        return (
            <NewsItem news={news} isLoading={isLoading}/>
        )
    }
}

const mapStateToProps = (state) => ({
    news: state.newsStore.news,
    isLoading: state.newsStore.isLoading,
    error: state.newsStore.error,

});

const mapDispatchToProps = (dispatch) => ({
    getNews: () => {
        dispatch(getNewsFromAPI());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
