import {fetchPosts} from "../../actions/index";
import {FETCH_POSTS} from "../../actions/types";

describe('fetchPosts action', () => {

    it('has the correct type', () => {
        const action = fetchPosts();
        expect(action.type).toEqual(FETCH_POSTS);
    });
});
