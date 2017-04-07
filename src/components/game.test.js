import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    //T esting newGame
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
    
    it('A new game can start', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [],
            feedback: 'Yay',
            correctAnswer: 10
        });
        wrapper.instance().newGame();
        // Expects state withiin Game to be:
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    });

    // Testing guess(guess)
    it('Guesses can be made', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 1
        });

        // Expects instance of guess with a certain number to equal string
        // depending on how close the guess value is to corretAnswer 0-100
        // tests each if block feedback:
        
        wrapper.instance().guess(60);
        expect(wrapper.state('guesses')).toEqual([60]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().guess(40);
        expect(wrapper.state('guesses')).toEqual([60, 40]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().guess(20);
        expect(wrapper.state('guesses')).toEqual([60, 40, 20]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm');

        wrapper.instance().guess(5);
        expect(wrapper.state('guesses')).toEqual([60, 40, 20, 5 ]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().guess(1);
        expect(wrapper.state('guesses')).toEqual([60, 40, 20, 5, 1]);
        expect(wrapper.state('feedback')).toEqual('You got it!');

    });
});
