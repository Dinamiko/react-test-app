import {UPDATE_A, UPDATE_B, MULTIPLY} from '../actions/types';

const initialState = {
    a: 0,
    b: 0,
    result: 0
};

export default function (state = initialState, action) {

    switch (action.type) {
        case UPDATE_A:
            return {...state, a: action.payload};
        case UPDATE_B:
            return {...state, b: action.payload};
        case MULTIPLY:
            return {...state, result: action.payload};
        default:
            return state;
    }
}
