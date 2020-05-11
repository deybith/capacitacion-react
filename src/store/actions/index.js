import * as actionTypes from  '../action-types'

export const cliente = (cliente) => {
	return {
		type: actionTypes.CLIENTE,
		Cliente: cliente
	}
}


export const addArticle = (article) => {
	return {
		type: actionTypes.ADDARTICLE,
		article: article
	}
}