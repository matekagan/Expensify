import moment from 'moment';

const defaultFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bill',
    sortBy: 'amounts',
    startDate: moment(1200000000),
    endDate: moment(1200000000).add(12, 'days')
};

export { defaultFilters, altFilters };
