import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios'
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {

});

afterEach(() => {

});

it('can fetch a list of comments and display them', () => {
  //Attempt to render the entire App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetch comments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  //expect to find a list of comments
  expect(wrapped.find('li').length).toEqual(500);
});
