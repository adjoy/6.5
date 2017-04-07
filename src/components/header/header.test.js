import React from 'react';
import {shallow} from 'enzyme';

import Header from './index';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Info modal not shown initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('When info modal is toggled it should render', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal(true);
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });
});
