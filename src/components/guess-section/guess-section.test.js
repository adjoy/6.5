import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './index';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });
    
    it('Renders the feedback', () => {
        const feedback = "some feedback";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});