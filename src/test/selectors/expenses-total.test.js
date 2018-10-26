import totalExpenses from '../../main/selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 for empty array', () => {
    expect(totalExpenses([])).toEqual({
        totalAmount: 0,
        expenseCount: 0
    });
});

test('Should return value of an single item for array with single item', () => {
    const testExpense = expenses[1];
    expect(totalExpenses([testExpense])).toEqual({
        totalAmount: testExpense.amount,
        expenseCount: 1
    });
});

test('Should return correct value of an array with mutiple items', () => {
    expect(totalExpenses(expenses)).toEqual({
        totalAmount: expenses[0].amount + expenses[1].amount + expenses[2].amount,
        expenseCount: 3
    });
});
