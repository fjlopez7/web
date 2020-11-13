export const GET_TEAMS: string = 'GET_TEAMS'
export const TEAMS_SUCCESS: string = 'GET_TEAMS_SUCCESS'
export const TEAMS_FAILED: string = 'GET_TEAMS_FAILED'
export const TEAMS_REQUESTED: string = 'GET_TEAMS_REQUESTED'

export const GET_USER_REQUESTED = 'GET_USER_REQUESTED';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const CREATE_USER_REQUESTED = 'CREATE_USER_REQUESTED';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_REQUESTED = 'USER_LOGOUT_REQUESTED';

interface USER_REQUESTED {
    type: typeof GET_USER_REQUESTED
    payload: {
        token: string
    }
}

interface USER_SUCCESS {
    type: typeof GET_USER_SUCCESS
    payload: {
        login: {
            name: string
            email: string
            role: string
            token: string
            id: string
        }
    }
}

interface USER_FAILED {
    type: typeof GET_USER_FAILED
    message: string
}

interface CREATE_REQUESTED {
    type: typeof CREATE_USER_REQUESTED
    payload: {
        token: string
    }
}

interface CREATE_SUCCESS {
    type: typeof CREATE_USER_SUCCESS
    payload: {
        signup: {
            name: string
            email: string
            role: string
            token: string
            id: string
        }
    }
}

interface CREATE_FAILED {
    type: typeof CREATE_USER_FAILED
    message: string
}

interface LOGOUT {
    type:  typeof USER_LOGOUT
}
interface LOGOUT_REQUESTED {
    type:  typeof USER_LOGOUT_REQUESTED
    payload : {}
}

export type ActionTypes = USER_REQUESTED | USER_SUCCESS | USER_FAILED | CREATE_REQUESTED | CREATE_SUCCESS | CREATE_FAILED | LOGOUT | LOGOUT_REQUESTED;