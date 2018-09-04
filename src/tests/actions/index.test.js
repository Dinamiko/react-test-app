import {fetchPosts} from "../../actions/index";
import {FETCH_POSTS} from "../../actions/types";
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
