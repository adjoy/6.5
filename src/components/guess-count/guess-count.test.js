import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './index';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it ('The correct guess count renders', () => {
        const value = 10;
        const wrapper = shallow(<GuessCount count={value} />);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    });
});