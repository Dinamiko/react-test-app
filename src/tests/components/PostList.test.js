import React from 'react';
import {mount} from 'enzyme';
import PostList from '../../components/PostList';
import Root from '../../Root';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
        status: 200,
        response: [
            {title: 'Post one'},
            {title: 'Post two'}
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

describe('posts list component', () => {

    let component;
    beforeEach(() => {
        component = mount(
            <Root>
                <PostList/>
            </Root>
        );
    });

    it('creates one li per post', (done) => {

        moxios.wait(() => {
            component.update();

            try {
                expect(component.find('li').length).toEqual(2);
                done();
            } catch (e) {
                done.fail(e);
            } finally {
                component.unmount();
            }
        });
    });

    it('refresh button removes posts before fetch', () => {

        moxios.wait(() => {
            component.update();

            try {
                component.find('button').simulate('click');
                expect(component.find('li').length).toEqual(0);
                done();
            } catch (e) {
                done.fail(e);
            } finally {
                component.unmount();
            }
        });
    });
});

