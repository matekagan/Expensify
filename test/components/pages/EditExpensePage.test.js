import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../../src/components/pages/EditExpensePage';
import testExpenses from '../../fixtures/expenses';

let wrapper;
let history;
let onSubmit;
let onButtonClick;
const testExpense = testExpenses[0];
beforeEach(() => {
    onSubmit = jest.fn();
    history = {
        push: jest.fn()
    };
    onButtonClick = jest.fn();
    wrapper = shallow(<EditExpensePage
        editExpense={onSubmit}
        removeExpense={onButtonClick}
        history={history}
        expense={testExpense}
    />);
});

test('Should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle change submit', () => {
    const updates = {
        description: 'New Expense Description',
        note: 'Changed Expense Note',
        amount: 112223131
    };
    wrapper.find('ExpenseForm').prop('onSubmit')(updates);
    expect(onSubmit).toHaveBeenLastCalledWith({
        id: testExpense.id,
        updates
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle click remove button', () => {
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalledWith(testExpense.id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});
