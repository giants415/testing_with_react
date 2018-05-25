import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';


it('shows a comment box', () => {
  // wrapped is the term used by enzyme docs but component is a reasonable substitute
  const wrapped = shallow(<App />);

  // expect "wrapped" to contain a "CommentBox". This returns an array with all items that match CommentBox and since
  // there should only be 1 CommentBox, this should equal 1
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
