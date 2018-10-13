import moment from 'moment';
import {
    setStartDate,
    setEndDate,
    setText,
    sortByDate,
    sortByAmount
} from '../../src/actions/filters';

test('Should generate setStartDate action Object', () => {
    expect(setStartDate(moment(1000))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(1000)
    });
});

test('Should generate setEndDate action Object', () => {
    expect(setEndDate(moment(1000))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1000)
    });
});

test('Should generate setText action Object with provided text', () => {
    const text = 'Some text';
    expect(setText(text)).toEqual({
        type: 'SET_TEXT',
        text
    });
});

test('Should generate setText action Object with default text', () => {
    expect(setText()).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

test('Should generate sortByDate action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should generate sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});
