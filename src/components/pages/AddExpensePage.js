import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../presentational/ExpenseForm';
import { addExpense } from '../../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <p>some text number 2</p>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addExpense: expense => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);