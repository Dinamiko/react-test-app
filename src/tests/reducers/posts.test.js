import postsReducer from '../../reducers/posts';
import {FETCH_POSTS} from "../../actions/types";

it('handles actions of type FETCH_POSTS', () => {
    const action = {
      type: FETCH_POSTS,
      payload: 'Some posts here'
    };

    const newState = postsReducer([], action);

    expect(newState).toEqual('Some posts here');
});
