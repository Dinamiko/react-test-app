import {fetchPosts, emptyPosts} from "../../actions/index";
import {FETCH_POSTS, EMPTY_POSTS} from "../../actions/types";
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
});

afterEach(() => {
    moxios.uninstall();
});

describe('fetchPosts action', () => {

    it('has the correct type', () => {
        const action = fetchPosts();
        expect(action.type).toEqual(FETCH_POSTS);
    });
});

describe('emptyPosts action', () => {

    it('has the correct type', () => {
        const action = emptyPosts();
        expect(action.type).toEqual(EMPTY_POSTS);
    });
});
