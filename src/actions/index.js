import axios from 'axios';
import {FETCH_POSTS} from "./types";

export function fetchPosts() {

    const response = axios.get('https://jsonplaceholder.typicode.com/posts');

    return {
        type: FETCH_POSTS,
        payload: response
    };
}
