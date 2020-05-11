import React, {useContext} from 'react'
import {ArticleContext} from "../../context/articleContext"


export default ({  }) => {
    const { cleanArticle } = useContext(ArticleContext)

    console.log(cleanArticle, 'saveArticle');

    const handleClick = () => {
        cleanArticle();
    }

    return <button onClick={handleClick}>
        Borrar
    </button>
}