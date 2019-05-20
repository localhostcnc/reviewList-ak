/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';


import ReviewList from './ReviewList';

describe('ReviewList', () => {
  test('Rendering the simple component', () => {
    const wrapper = shallow(
      <ReviewList />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
