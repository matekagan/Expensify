import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../../src/components/pages/ExpenseDashboardPage';

test('Should render expense dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
