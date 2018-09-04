import React from 'react';
import {shallow} from 'enzyme';
import App from '../../components/App';
import PostList from '../../components/PostList';

it('shows post list component', () => {
    const container = shallow(<App/>);
    expect(container.find(PostList).length).toEqual(1);
});



