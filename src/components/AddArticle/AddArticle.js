import React, { useState, useContext } from "react";
//import "./AddArticle.css";
import { ArticleContext } from "../../context/articleContext";

import {addArticle} from '../../store/actions'

import {connect} from 'react-redux';

const AddArticle = (props) => {

    const { saveArticle } = useContext(ArticleContext);
    const [article, setArticle] = useState();

    const handleArticleData = e => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value
        });
    };

    const addNewArticle = e => {
        e.preventDefault();
        //saveArticle(article); //////// asdasdasdasd
        props.dispatchArticle(article);
    };

    return (
        <form onSubmit={addNewArticle} className="add-article">
            <input
                type="text"
                id="title"
                placeholder="Title"
                onChange={handleArticleData}
            />
            <input
                type="text"
                id="body"
                placeholder="Body"
                onChange={handleArticleData}
            />
            <button>Add article</button>
        </form>
    );
};



const dispatchMapToProps = (dispatch) => ({
    dispatchArticle: (article) => dispatch(addArticle(article))
})

export default connect(null, dispatchMapToProps)(AddArticle);