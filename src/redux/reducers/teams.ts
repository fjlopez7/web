import * as type from '../types'

const estadoInicial = {
    teams:[],
    loading: false,
    error: null
}

const teams = (state = estadoInicial, action: any) => {
    switch(action.type) {
        case type.TEAMS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.TEAMS_SUCCESS:
            return {
                ...state,
                loading: false,
                teams: action.teams
                }
        case type.TEAMS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.mesagge,
            }
        default: 
            return state;
    }
}

export default teams