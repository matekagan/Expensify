import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../../src/components/presentational/ExpenseListFilters';
import { defaultFilters, altFilters } from '../../fixtures/filters';

let setText;
let sortByDate;
let sortByAmount;
let setStartDate;
let setEndDate;
let wrapper = shallow(<div />);

beforeEach(() => {
    setText = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={defaultFilters}
        setText={setText}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);
});

test('Should render ExpenseListFilters with default data correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alternate data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    const value = 'New Text';
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(setText).toHaveBeenCalledWith(value);
});

test('Should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
    const startDate = moment(0).add(12, 'days');
    const endDate = moment(0).add(112, 'days');

    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('Should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
