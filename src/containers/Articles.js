import React, { useContext } from "react";

import { ArticleContext } from "../context/articleContext";
import Article from "../components/Article/Article";

import {useSelector} from 'react-redux';

const Articles = () => {

    const articlesRedux = useSelector( state => state.Articles )

    const { articles } = useContext(ArticleContext);
    return (
        <div>
            {articles.map((article, keyContext) => (
                <Article key={'context' + keyContext} article={article} />
            ))}
            {articlesRedux.map((article, keyRedux) => (
                <Article key={'redux' + keyRedux} article={article} />
            ))}
        </div>
    );
};

export default Articles;