
import { GET_USER_REQUESTED , CREATE_USER_REQUESTED, USER_LOGOUT_REQUESTED} from '../types';

export const userLogin = ( payload: any) => {
    return {
        type: GET_USER_REQUESTED,
        payload: payload,
    }
}
export const userSingup = ( payload: any) => {
    return {
        type: CREATE_USER_REQUESTED,
        payload: payload,
    }
}
export const userLogout = () => {
    return {
        type: USER_LOGOUT_REQUESTED,
        payload: {},
    }
}

