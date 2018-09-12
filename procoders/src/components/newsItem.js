import React from 'react';
import {Loading} from "element-react";

const NewsItem = (props) => {
    const {news = [], isLoading=false} = props;
    return (
        <React.Fragment>
            <h2>News</h2>
            <Loading text="Loading..." loading={isLoading}><ul className='newsItem'>
            {news.map((el) =>
                <li key={el.id}>
                    <h3>{el.title}</h3>
                    <section>{el.text}</section>
                </li>)}
            <h4>Всего новостей: {props.news.length}</h4>
        </ul>
            </Loading>
        </React.Fragment>
    )
};

export default NewsItem;
