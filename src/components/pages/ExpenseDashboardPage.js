import React from 'react';
import ExpensesList from '../presentational/ExpenseList';
import ExpenseListFilters from '../presentational/ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <h3>Dashboard</h3>
        <p>some text</p>
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;
