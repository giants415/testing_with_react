import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
  //Attempt to render the entire App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetch comments' button and click it

  //expect to find a list of comments
});
