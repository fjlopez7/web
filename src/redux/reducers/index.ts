import { combineReducers } from 'redux';
import teams from './teams';
import userReducer from './user';

export const rootReducer = combineReducers({
    teams,
    user : userReducer,
})

export type RootState = ReturnType<typeof rootReducer>