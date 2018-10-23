import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    removeExpense,
    editExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from '../../src/actions/expenses';
import testExpenses from '../fixtures/expenses';
import database from '../../src/firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    testExpenses.forEach(({ id, description, note, createdAt, amount }) => {
        expenseData[id] = {
            description,
            note,
            createdAt,
            amount
        };
    });
    database.ref('expenses').set(expenseData).then(() => {
        done();
    });
});

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
    const expense = testExpenses[0];
    expect(addExpense(expense)).toEqual({
        type: 'ADD_EXPENSE',
        expense
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3300,
        note: 'This one is better',
        createdAt: 33321213
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(store.getActions()[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${store.getActions()[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add default exepense to database and the store', (done) => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        expect(store.getActions()[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`expenses/${store.getActions()[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});

test('Should setup set expense action object with data', () => {
    expect(setExpenses(testExpenses)).toEqual({
        type: 'SET_EXPENSES',
        expenses: testExpenses
    });
});

test('Should fetch expenses from database', (done) => {
    const store = createMockStore();
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: testExpenses
        });
        done();
    });
});

test('Should remove an expense from database', (done) => {
    const store = createMockStore({});
    const itemID = testExpenses[1].id;
    store.dispatch(startRemoveExpense({ id: itemID })).then(() => {
        expect(store.getActions()[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: itemID
        });
    }).then(() => {
        database.ref(`expenses/${itemID}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toBe(null);
            done();
        });
    });
});

test('Should edit an expense in database', (done) => {
    const store = createMockStore({});
    const updatedItem = testExpenses[1];
    const updates = {
        amount: 1133113,
        description: 'This is another description'
    };
    store.dispatch(startEditExpense({
        id: updatedItem.id,
        updates
    })).then(() => {
        expect(store.getActions()[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: updatedItem.id,
            updates
        });
    }).then(() => {
        database.ref(`expenses/${updatedItem.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual({
                note: updatedItem.note,
                createdAt: updatedItem.createdAt,
                ...updates
            });
            done();
        });
    });
});
