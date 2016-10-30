import {Constants} from '../constants/actions';

export const initialState = {
    loggedin: false,
    user: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.LOAD_USER_SUCCESS:
            return {loggedin: true, user:{name:'testuser'}}
        default:
            return state
    }
}
