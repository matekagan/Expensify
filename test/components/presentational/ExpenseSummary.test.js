import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../../src/components/presentational/ExpenseSummary';

test('Should render correctly with no visible expenses', () => {
    const wrapper = shallow(<ExpenseSummary totalAmount={0} expenseCount={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render correctly with single visible expense', () => {
    const wrapper = shallow(<ExpenseSummary totalAmount={12300} expenseCount={1} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render correctly with multiple visible expense', () => {
    const wrapper = shallow(<ExpenseSummary totalAmount={1241300} expenseCount={3} />);
    expect(wrapper).toMatchSnapshot();
});
