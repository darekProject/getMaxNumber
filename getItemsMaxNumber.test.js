import 'babel-polyfill';
import expect from 'expect';
import getItemsMaxNumber from './getItemsMaxNumber';

describe('get items max number', () => {
    it('should return max number', () => {
        const items = [
            {name: 'item 1'},
            {name: 'item 2'},
            {name: 'item 3'},
            {name: 'item 4'},
            {name: 'item 5'}
        ];
        expect(getItemsMaxNumber(items)).toBe(5);
    });

    it('should return 0', () => {
        const items = [
            {name: 'item'},
            {name: 'item'},
            {name: 'item'},
            {name: 'item'},
            {name: 'item'}
        ];
        expect(getItemsMaxNumber(items)).toBe(0);
    });

    it('should return number and max value', () => {
        const items = [
            {name: 'item 3'},
            {name: 'item 4'},
            {name: 'item 5'},
            {name: 'item 6'},
            {name: 'item 2'}
        ];
        expect(getItemsMaxNumber(items)).toBe(6);
        expect(getItemsMaxNumber(items)).toBeA('number');
    });
});