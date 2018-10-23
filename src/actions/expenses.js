import database from '../firebase/firebase';

export const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense
});

export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = ({ id, updates }) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const setExpenses = expenses => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startAddExpense = (expenseData = {}) => (dispatch) => {
    const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database.ref('expenses').push(expense).then((reference) => {
        dispatch(addExpense({
            id: reference.key,
            ...expense
        }));
    });
};

export const startSetExpenses = () => dispatch => database.ref('expenses').once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch(setExpenses(expenses));
    });

export const startRemoveExpense = ({ id }) => dispatch => database.ref(`expenses/${id}`).remove()
    .then(() => {
        dispatch(removeExpense({ id }));
    });
