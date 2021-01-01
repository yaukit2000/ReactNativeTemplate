import { takeEvery, call, take, select, fork, put } from 'redux-saga/effects'
import {
    LOGIN,
    LOGIN_DONE,
    Login,
    LOGOUT,
    LOGOUT_DONE,
} from '../actions';
import { TAppState, TAuthState } from '../models';


export const getAuth = (state: TAppState) => state.auth;


function* login(action: Login) {
    // yield secure(function* () {
    //     yield logout();
    //     const { username, password } = action;
    //     const { sessionToken, userId, roleName } = yield call(async () => await apiClient.signIn(username, password));
    //     yield put({ type: LOGIN_DONE, sessionToken, userId, roleName, username });
    //     if (roleName === 'staff' || roleName === 'admin') {
    //         globalVar.history.push('/event')
    //     }
    // }, true);
}

function* logout(action?: any) {
    // try {
    //     yield fork(async () => apiClient.signOut());
    // } catch (error) {
    //     console.error(error);
    // } finally {
    //     yield put({ type: LOGOUT_DONE });
    //     globalVar.history.push('/login')
    // }
}

function* watchLogin() {
    yield takeEvery(LOGIN, login)
}

function* watchLogout() {
    yield takeEvery(LOGOUT, logout)
}


export default [
    fork(watchLogin),
    fork(watchLogout),
]