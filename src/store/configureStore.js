import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const init = () => {
    const store = createStore(combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
/* eslint-enable */
export default init;
