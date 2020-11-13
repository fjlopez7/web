import { all } from 'redux-saga/effects'
import teamSaga from './teamSagas'
import userSaga from './userSagas'


export default function* rootSaga() {
    yield all([
        teamSaga(),
        userSaga(),
    ])
}


