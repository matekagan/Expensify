import { addExpense, removeExpense, editExpense } from '../../src/actions/expenses';


test('Should set Up removeExpense action Object', () => {
    expect(removeExpense(
        {
            id: 'someID'
        }
    )).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'someID'
    });
});

test('Should set Up EditExpense action Object', () => {
    expect(editExpense({
        id: 'someID',
        updates: {
            amount: 120,
            description: 'Rent bill'
        }
    })).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'someID',
        updates: {
            amount: 120,
            description: 'Rent bill'
        }
    });
});

test('Should set up addExpense action object with provided values', () => {
    const expense = {
        description: 'Rent',
        amount: 1200,
        note: 'This is payment for rent',
        createdAt: 1500
    };
    expect(addExpense(expense)).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('Should set up addExpense action object with default values', () => {
    expect(addExpense()).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
