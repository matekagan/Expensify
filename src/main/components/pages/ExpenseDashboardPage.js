import React from 'react';
import ExpensesList from '../presentational/ExpenseList';
import ExpenseListsFilters from '../presentational/ExpenseListFilters';
import ExpensesSummary from '../presentational/ExpenseSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListsFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;
