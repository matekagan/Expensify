import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses';
import totalExpenses from '../../selectors/expenses-total';

export const ExpenseSummary = ({ totalAmount, expenseCount }) => (
    <div>
        <h4>
            {
                expenseCount === 0
                    ? 'No expenses to show'
                    : `Viewing 
                ${expenseCount} 
                expense
                ${expenseCount === 1 ? '' : 's'} 
                totalling 
                ${numeral(totalAmount / 100).format('$0,0.00')}`
            }
        </h4>
    </div>
);

const mapStateToProps = state => ({
    ...totalExpenses(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpenseSummary);
