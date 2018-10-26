import { login, logout } from '../../main/actions/auth';

test('Should set up login action object', () => {
    const uid = '1231sad';
    expect(login({ uid })).toEqual({
        type: 'LOG_IN',
        uid
    });
});

test('Should set up logout action object', () => {
    expect(logout()).toEqual({ type: 'LOG_OUT' });
});
