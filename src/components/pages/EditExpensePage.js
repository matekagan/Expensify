import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../presentational/ExpenseForm';
import { editExpense, startRemoveExpense } from '../../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense({ id: this.props.expense.id, updates: expense });
        this.props.history.push('/');
    };

    onButtonClick = () => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    type="button"
                    onClick={this.onButtonClick}
                >
                    Remove
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    editExpense: ({ id, updates }) => dispatch(editExpense({ id, updates })),
    removeExpense: id => dispatch(startRemoveExpense({ id }))
});

const mapStateToProps = (state, props) => ({
    ...props,
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
