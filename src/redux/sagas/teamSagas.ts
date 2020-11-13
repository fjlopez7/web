import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import * as types from '../types'


const apiUrl = 'http://localhost:3002/equipos'

const getApi = () => {
    return axios.get(apiUrl)
        .then(respuesta => respuesta.data)
        .catch(error => {throw error})
}


function* fetchTeams(action:any) {
    try {
        const teams = yield call(getApi)
        yield put({type: types.TEAMS_SUCCESS, teams: teams})
    } catch (error) {
        yield put({type: types.TEAMS_FAILED, message: error.message})
    }
}

function* teamsSaga() {
    yield takeEvery('GET_TEAMS_REQUESTED', fetchTeams)
}

export default teamsSaga