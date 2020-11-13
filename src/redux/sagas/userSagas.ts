import { call, put, takeEvery } from 'redux-saga/effects';

const getUser = (payload: any) => {
    return payload
}

function* fetchUser(action: any) {
    const { payload } = action
    try {
        const user = yield call(getUser, payload);
        yield put({ type: 'GET_USER_SUCCESS', payload: user });
    } catch (e) {

        yield put({ type: 'GET_USER_FAILED', message: e.message });
    }
}

function* createUser(action: any) {
    const { payload } = action
    try {
        const user = yield call(getUser, payload);
        yield put({ type: 'CREATE_USER_SUCCESS', payload: user });
    } catch (e) {

        yield put({ type: 'CREATE_USER_FAILED', message: e.message });
    }
}

function* logout() {
    yield put({ type: 'USER_LOGOUT' });
}

function* userSaga() {
    yield takeEvery('GET_USER_REQUESTED', fetchUser);
    yield takeEvery('CREATE_USER_REQUESTED', createUser );
    yield takeEvery('USER_LOGOUT_REQUESTED', logout);
    
}

export default userSaga;