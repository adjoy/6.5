import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './index';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    })

    it('onGuess callback will fire from form submission', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback} />);
        const value = 77;
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });

    it('Input should reset after form submission', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="text"]');
        input.node.value = 77;
        wrapper.simulate('submit');
        expect(input.node.value).toEqual('');
    });
})



