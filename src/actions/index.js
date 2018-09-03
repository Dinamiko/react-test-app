import {GET_POSTS} from "./types";

const somePosts = [
    {title: 'Post one'},
    {title: 'Post two'},
];

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: somePosts
    };
}
