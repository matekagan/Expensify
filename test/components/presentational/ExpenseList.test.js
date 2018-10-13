import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../../src/components/presentational/ExpenseList';
import testExpenses from '../../fixtures/expenses';

test('Should render expenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={testExpenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expenses list without expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
