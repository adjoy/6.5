import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './index';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('When new game is clicked it should call onNewGame', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onNewGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it('When info is clicked it should call onInfo', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo={callback} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
});
