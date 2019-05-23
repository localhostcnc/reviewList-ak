import React from 'react';
import { shallow } from 'enzyme';
import ReviewSection from './ReviewSection';

describe('ReviewSection', () => {
  test('Rendering the Review Section component', () => {
    const wrapper = shallow(
      <ReviewSection />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
