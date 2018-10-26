import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses';
import totalExpenses from '../../selectors/expenses-total';

export const ExpenseSummary = ({ totalAmount, expenseCount }) => {
    const formattedNumber = numeral(totalAmount / 100).format('$0,0.00');
    const pluralDependentText = expenseCount === 1 ? 'expense ' : 'expenses ';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing
                    <span> {expenseCount} </span>
                    {pluralDependentText}
                    totalling
                    <span> {formattedNumber}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create" activeClassName="navlink-active">Create Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    ...totalExpenses(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpenseSummary);
