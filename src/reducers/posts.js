import {FETCH_POSTS, EMPTY_POSTS} from "../actions/types";

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data;
        case EMPTY_POSTS:
            return action.payload;
        default:
            return state;
    }
}
