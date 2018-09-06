import axios from 'axios';
import {FETCH_POSTS, EMPTY_POSTS} from "./types";

export function fetchPosts() {

    const response = axios.get('https://jsonplaceholder.typicode.com/posts');

    return {
        type: FETCH_POSTS,
        payload: response
    };
}

export function emptyPosts() {
    return {
        type: EMPTY_POSTS,
        payload: []
    }
}
