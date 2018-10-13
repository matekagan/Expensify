import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

/* eslint-disable no-underscore-dangle */
const init = () => {
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
/* eslint-enable */
export default init;
