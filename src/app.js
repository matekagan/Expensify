import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setText } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 25100,
    createdAt: 1539071200000
}));

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 20000,
    createdAt: 1539039200000
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 232400,
    createdAt: 1539019200000
}));

// console.log(getVisibleExpenses(
//     store.getState().expenses,
//     store.getState().filters
// ));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('App'));
