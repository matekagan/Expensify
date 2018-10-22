import expensesReducer from '../../src/reducers/expenses';
import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';
import testExpenses from '../fixtures/expenses';

test('Should set default state', () => {
    expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([]);
});

test('Should remove expense with valid id', () => {
    expect(expensesReducer(testExpenses, removeExpense({ id: '1' }))).toEqual([
        testExpenses[1],
        testExpenses[2]
    ]);
});

test('Should remove nothig when invalid id is passed', () => {
    expect(expensesReducer(testExpenses, removeExpense({ id: 'invalidID' }))).toEqual(testExpenses);
});

test('Should add expense', () => {
    const testExpense = {
        id: 'someID',
        description: 'Coffe in MCaffe',
        amount: 1200,
        note: '',
        createdAt: 11221122
    };
    expect(expensesReducer(testExpenses, addExpense(testExpense))).toEqual([
        ...testExpenses,
        testExpense
    ]);
});

test('Should edit expense', () => {
    const updates = {
        description: 'Chewing Gum',
        amount: 300
    };
    expect(expensesReducer(testExpenses, editExpense({
        id: testExpenses[0].id,
        updates
    }))).toEqual([
        {
            ...testExpenses[0],
            ...updates
        },
        ...testExpenses.slice(1, 3)
    ]);
});

test('Should not edit expense when invalid id is passed', () => {
    const updates = {
        description: 'Chewing Gum',
        amount: 300
    };
    expect(expensesReducer(testExpenses, editExpense({ id: 'invalidID', updates }))).toEqual(testExpenses);
});
