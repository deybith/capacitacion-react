import React, {useContext} from 'react'
import {ArticleContext} from "../../context/articleContext"

import {useDispatch} from 'react-redux';
import { CLEARARTICLES } from '../../store/action-types'


export default ({  }) => {
    const dispatch = useDispatch();

    const { cleanArticle } = useContext(ArticleContext)

    console.log(cleanArticle, 'saveArticle');

    const handleClick = () => {
        cleanArticle();
        dispatch({ type: CLEARARTICLES });
    }

    return <button onClick={handleClick}>
        Borrar
    </button>
}