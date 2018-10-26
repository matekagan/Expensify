import moment from 'moment';

export default [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 200,
        createdAt: moment(0).add(30, 'days').valueOf()
    },
    {
        id: '2',
        description: 'Gas bill',
        note: '',
        amount: 20000,
        createdAt: moment(0).valueOf()
    },
    {
        id: '3',
        description: 'Water Bill',
        note: '',
        amount: 2000,
        createdAt: moment(0).add(15, 'days').valueOf()
    }
];
