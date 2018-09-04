import postsReducer from '../../reducers/posts';
import {FETCH_POSTS} from "../../actions/types";
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
});

afterEach(() => {
    moxios.uninstall();
});

it('handles actions of type FETCH_POSTS', () => {

    const action = {
      type: FETCH_POSTS,
      payload: 'Some posts here'
    };

    const newState = postsReducer([], action);

    moxios.wait(() => {
        expect(newState).toEqual('Some posts here');
    });

});
