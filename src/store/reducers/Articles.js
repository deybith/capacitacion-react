import * as ActionTypes from '../action-types'

const initialState = [];

export default (state = initialState, { type, article }) => {
    if (type === ActionTypes.ADDARTICLE) {
        return [...state, article];
    } else if (type === ActionTypes.CLEARARTICLES) {
        return [];
    }
    return state;
};
