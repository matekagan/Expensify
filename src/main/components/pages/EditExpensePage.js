import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../presentational/ExpenseForm';
import { editExpense, startRemoveExpense, startEditExpense } from '../../actions/expenses';

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
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className="button button--secondary"
                        type="button"
                        onClick={this.onButtonClick}
                    >
                        Remove Expense
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    editExpense: ({ id, updates }) => dispatch(startEditExpense({ id, updates })),
    removeExpense: id => dispatch(startRemoveExpense({ id }))
});

const mapStateToProps = (state, props) => ({
    ...props,
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
