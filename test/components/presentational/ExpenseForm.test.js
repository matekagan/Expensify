import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../../src/components/presentational/ExpenseForm';
import testExpenses from '../../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={testExpenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error when epmpty form is submitter', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('errorMessage')).toEqual('Please fill in all required fields');
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'Expense Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toEqual(value);
});

test('Shoould set note on testarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = ' Note on Expense Item';
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toEqual(value);
});

test('Should set correct amount', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '1233.12';
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toEqual(value);
});


test('Should not set incorrect amount', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '123sa3.12';
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toEqual('');
});

test('Should call oSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const testExpense = testExpenses[0];
    const wrapper = shallow(<ExpenseForm expense={testExpense} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('errorMessage')).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: testExpense.description,
        amount: testExpense.amount,
        note: testExpense.note,
        createdAt: testExpense.createdAt
    });
});


test('Should set new date on datepicker change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendarFocused value to true', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});
