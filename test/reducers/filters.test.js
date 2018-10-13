import moment from 'moment';
import filtersReducer from '../../src/reducers/filters';
import {
    setEndDate,
    setStartDate,
    setText,
    sortByDate,
    sortByAmount
} from '../../src/actions/filters';

test('Should set up default filter values', () => {
    const testFilters = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    expect(filtersReducer(undefined, { type: '@@INIT' })).toEqual(testFilters);
});

test('Should set sortBy to amount', () => {
    expect(filtersReducer(undefined, sortByAmount())).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to date', () => {
    const testFilters = {
        text: 'text',
        sortBy: 'amount',
        startDate: 12,
        endDate: 14
    };
    expect(filtersReducer(testFilters, sortByDate())).toEqual({
        text: 'text',
        sortBy: 'date',
        startDate: 12,
        endDate: 14
    });
});

test('Should set text filter', () => {
    const text = 'some text';
    expect(filtersReducer(undefined, setText(text))).toEqual({
        text,
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set start date', () => {
    const startDate = moment(11231123);
    expect(filtersReducer(undefined, setStartDate(startDate))).toEqual({
        text: '',
        sortBy: 'date',
        startDate,
        endDate: moment().endOf('month')
    });
});

test('Should set end date', () => {
    const endDate = moment(1231313123);
    expect(filtersReducer(undefined, setEndDate(endDate))).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate
    });
});
