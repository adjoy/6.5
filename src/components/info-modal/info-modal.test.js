import React from 'react';
import {shallow} from 'enzyme';

import InfoModal from './index';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('onClose\'s callback occurs when the close button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal onClose={callback} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
});
