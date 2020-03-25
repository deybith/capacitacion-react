import * as ActionTypes from '../action-types'

const initialState = {
	nombre: 'Steven',
	apellido: '',
}

export default  (state= initialState, {type , Cliente}) => {
    if(type === ActionTypes.CLIENTE){
	    return Object.assign({}, state, {
	    	...Cliente
	    })
    }
    return state;
};
