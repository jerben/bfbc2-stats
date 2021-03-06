import expect from 'expect.js';

import PlayerStore from '../PlayerStore';
import actionTypes from '../../actions/ActionTypes';


describe('PlayerStore', () => {

    let sut = new PlayerStore();
    beforeEach(() => {
        sut = new PlayerStore();
    });

    it('should calculate complex weapon stat given weapon and key', () => {
        expect(PlayerStore.getCalculatedValue({
            some: 5,
            thing: 9
        }, 'some-thing')).to.be(5 / 9);
    });

    it('should return whatever given string whatever-something', () => {
        expect(PlayerStore.stripFirstKey('whatever-something')).to.be('whatever');
    });

    it('should return something given string whatever-something', () => {
        expect(PlayerStore.stripSecondKey('whatever-something')).to.be('something');
    });

    it('should sort weapon list by calculated value given complex key', () => {
        const state = {
            loading: false,
            overall: {},
            weapons: [{
                deaths: 1,
                kills: 10
            }, {
                deaths: 1,
                kills: 1
            }, {
                deaths: 1,
                kills: 2
            }, ]
        };

        const action = {
            type: actionTypes.SORT_WEAPON_STATS,
            key: 'kills-deaths',
        };

        const expected = {
            loading: false,
            overall: {},
            weapons: [{
                deaths: 1,
                kills: 10
            }, {
                deaths: 1,
                kills: 2
            }, {
                deaths: 1,
                kills: 1
            }, ]
        };

        const actual = sut.reduce(state, action);
        expect(actual).to.eql(expected);
    });



    it('should sort weapon list by key given key', () => {
        const state = {
            loading: false,
            overall: {},
            weapons: [{
                label: 'test1',
                kills: 10
            }, {
                label: 'test2',
                kills: 1
            }, {
                label: 'test3',
                kills: 2
            }, ]
        };

        const action = {
            type: actionTypes.SORT_WEAPON_STATS,
            key: 'kills',
        };

        const expected = {
            loading: false,
            overall: {},
            weapons: [{
                label: 'test1',
                kills: 10
            }, {
                label: 'test3',
                kills: 2
            }, {
                label: 'test2',
                kills: 1
            }, ]
        };

        const actual = sut.reduce(state, action);
        expect(actual).to.eql(expected);
    });

    it('should be loading weapon list given LOAD_PLAYER_START and initial state', () => {
        const state = {
            loading: false,
            overall: {},
            weapons: []
        };
        const action = {
            type: actionTypes.LOAD_PLAYER_START
        };
        const expected = {
            loading: true,
            overall: {},
            weapons: []
        };

        const actual = sut.reduce(state, action);
        expect(actual.loading).to.be(true);
    });

    it('should not be loading weapon list given LOAD_PLAYER_SUCCEED and state with loading', () => {
        const state = {
            loading: true,
            overall: {},
            weapons: []
        };
        const action = {
            type: actionTypes.LOAD_PLAYER_SUCCEED,
            data: {}
        };

        const actual = sut.reduce(state, action);
        expect(actual.loading).to.be(false);
    });

    it('should not be loading weapon list given LOAD_PLAYER_FAIL and state with loading', () => {
        const state = {
            loading: true,
            overall: {},
            weapons: []
        };
        const action = {
            type: actionTypes.LOAD_PLAYER_SUCCEED,
            data: {}
        };
        const expected = {
            loading: false,
            overall: {},
            weapons: []
        };

        const actual = sut.reduce(state, action);
        expect(actual.loading).to.be(false);
    });


});
