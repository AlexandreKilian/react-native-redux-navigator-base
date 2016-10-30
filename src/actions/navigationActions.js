import {Constants} from '../constants/actions';


const Actions = {

    navigatePush: (state) =>{
        return dispatch => {
            state = typeof state === 'string' ? { key: state, title: state } : state
            dispatch({
                type:Constants.NAV_PUSH,
                state
            })
        }
    },
    navigatePop: () =>{
        return dispatch => {
            dispatch({
                type:Constants.NAV_POP
            })
        }
    },
    navigateJumpToKey: (key) =>{
        return dispatch => {
            dispatch({
                type:Constants.NAV_JUMP_TO_KEY,
                key
            })
        }
    },
    navigateJumpToIndex: (index) =>{
        return dispatch => {
            dispatch({
                type:Constants.NAV_JUMP_TO_INDEX,
                index
            })
        }
    },
    navigateReset: (routes,index) =>{
        return dispatch => {
            dispatch({
                type:Constants.NAV_JUMP_TO_INDEX,
                routes,
                index
            })
        }
    },

}

export default Actions;
