import {FETCH_POSTS} from "./types";

const somePosts = [
    {title: 'Post one'},
    {title: 'Post two'},
];

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: somePosts
    };
}
