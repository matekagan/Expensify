import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

export const startLogout = () => () => firebase.auth().signOut();

export const login = ({ uid }) => ({
    type: 'LOG_IN',
    uid
});

export const logout = () => ({
    type: 'LOG_OUT'
});
