import React from 'react';
import {shallow} from 'enzyme';

import ReviewList from './ReviewList.jsx';

describe('ReviewList', () => {
    test('Rendering the simple component', () => {
        const wrapper = shallow (
            <ReviewList />
        );
        expect(wrapper).toMatchSnapshot();
    });  
});