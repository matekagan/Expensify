import authReducer from '../../main/reducers/auth';
import { login, logout } from '../../main/actions/auth';

test('Should set default state', () => {
    expect(authReducer(undefined, { type: '@@INIT' })).toEqual({});
});

test('Should set up user id when on login', () => {
    const uid = 'as123as';
    expect(authReducer({}, login({ uid }))).toEqual({
        uid
    });
});

test('Should remove user id on logout', () => {
    const initialState = { uid: '1231assd' };
    expect(authReducer(initialState, logout())).toEqual({});
});
