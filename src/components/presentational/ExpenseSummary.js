import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses';
import totalExpenses from '../../selectors/expenses-total';

export const ExpenseSummary = ({ totalAmount, expenseCount }) => {
    const formattedNumber = numeral(totalAmount / 100).format('$0,0.00');
    const pluralDependentText = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>
                {
                    `Viewing ${expenseCount} ${pluralDependentText} totalling ${formattedNumber}`
                }
            </h1>
        </div>
    );
};

const mapStateToProps = state => ({
    ...totalExpenses(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpenseSummary);
