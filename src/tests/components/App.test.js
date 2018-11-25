import React from 'react';
import {mount} from 'enzyme';
import Root from '../../Root';
import App from '../../components/App';
import Sum from '../../components/Sum';
import Multiply from '../../components/Multiply';

test('display Sum and Multiply components', () => {
    const component = mount(<Root><App/></Root>);
    expect(component.find(Sum).length).toEqual(1);
    expect(component.find(Multiply).length).toEqual(1);
});
