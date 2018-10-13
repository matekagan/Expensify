import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const DEFAULT_EXPENSES = [];

const DEFAULT_FILTERS = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ({ id, updates }) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setText = (text = '') => ({
    type: 'SET_TEXT',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = startDate => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = endDate => ({
    type: 'SET_END_DATE',
    endDate
});


const expenseReducer = (state = DEFAULT_EXPENSES, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                return expense;
            });
        default:
            return state;
    }
};

const filtersReducer = (state = DEFAULT_FILTERS, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
}));

// Get visible expenses

const getVisibleExpenses = (
    expenses,
    {
        text,
        sortBy,
        startDate,
        endDate
    }
) => expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
    if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
    }
    return a.amount < b.amount ? 1 : -1;
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 31200, createdAt: 0 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300, createdAt: 12345 }));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense({
//     id: expenseTwo.expense.id,
//     updates: { amount: 777 }
// }));
// store.dispatch(setText('ffe'));
store.dispatch(setText());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(112312));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [
        {
            id: 'asdafasd',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 53400,
            createdAt: 0
        }
    ],
    filters: {
        text: '',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 25
// };

// console.log({
//     age: 34,
//     ...user,
//     location: 'Philadelphia'
// });
