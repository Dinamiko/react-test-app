import React from 'react';
import {shallow} from 'enzyme';
import PostList from '../../components/PostList';
import Root from '../../Root';

it('test', () => {
    const component = shallow(
        <Root>
            <PostList/>
        </Root>
    );
});
