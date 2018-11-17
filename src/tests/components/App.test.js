import React from 'react';
import {shallow} from 'enzyme';
import App from '../../components/App';
import PostList from '../../components/PostList';

it('shows post list component', () => {
    const component = shallow(<App/>);
    expect(component.find(PostList).length).toEqual(1);
});



