import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../../main/components/pages/AddExpensePage';
import testExpenses from '../../fixtures/expenses';


let onSubmit;
let history;
let wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(<AddExpensePage startAddExpense={onSubmit} history={history} />);
});

test('Should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    const expense = testExpenses[1];
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expense);
});
