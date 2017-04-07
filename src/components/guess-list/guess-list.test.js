import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './index';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('Renders the list of the user\'s guesses', () => {
        const values = [1, 2];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });
});
