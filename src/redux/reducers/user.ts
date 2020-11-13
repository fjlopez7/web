import * as userType from '../types/index';
import {ActionTypes} from '../types/index';

const initialState = {
    isLoggedIn: false,
    userName: null,
    userEmail: null,
    userJob: null,
    userToken: null,
    userId: null,
    error: null,
    isLoading: false,
  };


  const userReducer = (prevState = initialState, action: ActionTypes) => {
    switch( action.type ) {
      case userType.GET_USER_REQUESTED: 
        return {
          ...prevState,
          loading: true,
          userToken: action.payload.token,
        };
      case userType.GET_USER_SUCCESS: 
        return {
            ...prevState,
            userName: action.payload.login.name,
            userToken: action.payload.login.token,
            userEmail: action.payload.login.email,
            userJob: action.payload.login.role,
            userId: action.payload.login.id,
            isLoggedIn: true,
            isLoading: false,
        };
      case userType.USER_LOGOUT_REQUESTED:
         return {
            ...prevState,
            loading: true,
         };
      case userType.GET_USER_FAILED :
        return {
          ...prevState,
          isLoggedIn: false,
          error: action.message
        } 
        case userType.USER_LOGOUT: 
        return {
          ...prevState,
          isLoggedIn: false,
          userName: null,
          userEmail: null,
          userJob: null,
          userToken: null,
          userId: null,
          isLoading: false,
        };
      case userType.CREATE_USER_REQUESTED: 
        return {
          ...prevState,
          loading: true,
          userToken: action.payload.token,
        };
      case userType.CREATE_USER_SUCCESS: 
        return {
            ...prevState,
            userName: action.payload.signup.name,
            userToken: action.payload.signup.token,
            userEmail: action.payload.signup.email,
            userJob: action.payload.signup.role,
            userId: action.payload.signup.id,
            isLoggedIn: true,
            isLoading: false,
        };
      case userType.CREATE_USER_FAILED :
        return {
          ...prevState,
          isLoggedIn: false,
          error: action.message
        } 
      default: {
        return prevState
      }
    }
  };

  export default userReducer;