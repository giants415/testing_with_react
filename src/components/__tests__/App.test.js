import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';


it('shows a comment box', () => {
  // wrapped is the term used by enzyme docs but component is a reasonable substitute 
  const wrapped = shallow(<App />);
});
