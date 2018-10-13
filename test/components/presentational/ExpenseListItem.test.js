import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../../src/components/presentational/ExpenseListItem';
import testExpenses from '../../fixtures/expenses';

test('Should render expense list item with data', () => {
    const expense = testExpenses[0];
    const wrapper = shallow(<ExpenseListItem key={expense.id} {...expense} />);
    expect(wrapper).toMatchSnapshot();
});
