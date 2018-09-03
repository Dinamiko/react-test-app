import React from 'react';
import {mount} from 'enzyme';
import PostList from '../../components/PostList';
import Root from '../../Root';

let component;

beforeEach(() => {
    const initialState = {
        posts: [
            {title: 'Post one'},
            {title: 'Post two'},
        ]
    };

    component = mount(
        <Root initialState={initialState}>
            <PostList/>
        </Root>
    );
});

it('creates one li per post', () => {
    expect(component.find('li').length).toEqual(2);
});
