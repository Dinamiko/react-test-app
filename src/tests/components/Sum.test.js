import React from 'react';
import {shallow} from 'enzyme';
import Sum from '../../components/Sum';

let component;
beforeEach(() => {
    component = shallow(<Sum title="Title here" getEventFromCalculator={() => {}}/>);
});

test('display title', () => {
    expect(component.find('h3').text()).toContain('Title here');
});

test('display elements', () => {
    expect(component.find('#a').length).toEqual(1);
    expect(component.find('#b').length).toEqual(1);
    expect(component.find('#result').length).toEqual(1);
    expect(component.find('button').length).toEqual(1);
});

test('sum two numbers', () => {
    component.find('#a').simulate('change', {
        target: {
            value: 1
        }
    });
    component.find('#b').simulate('change', {
        target: {
            value: 2
        }
    });

    component.find('button').simulate('click');

    expect(component.find('#result').prop('value')).toEqual(3);
});
