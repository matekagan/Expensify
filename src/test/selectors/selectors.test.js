import moment from 'moment';
import selectExpenses from '../../main/selectors/expenses';
import testExpenses from '../fixtures/expenses';

test('Should filter by text value', () => {
    const filters = {
        text: 'bill',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    expect(selectExpenses(
        testExpenses,
        filters
    )).toEqual([
        testExpenses[2],
        testExpenses[1]
    ]);
});


test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).add(10, 'days'),
        endDate: undefined
    };

    expect(selectExpenses(testExpenses, filters)).toEqual([
        testExpenses[0],
        testExpenses[2]
    ]);
});

test('Should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(20, 'days')
    };

    expect(selectExpenses(testExpenses, filters)).toEqual([
        testExpenses[2],
        testExpenses[1]
    ]);
});


test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    expect(selectExpenses(testExpenses, filters)).toEqual([
        testExpenses[0],
        testExpenses[2],
        testExpenses[1]
    ]);
});

test('Should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    expect(selectExpenses(testExpenses, filters)).toEqual([
        testExpenses[1],
        testExpenses[2],
        testExpenses[0]
    ]);
});
