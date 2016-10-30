import {Constants} from '../constants/actions';
import * as NavigationStateUtils from 'NavigationStateUtils'

export const initialState = {
    index: 0,
    routes: [
        { key: 'Home', title: 'Home'},
    ]
};

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.NAV_PUSH:
            if (state.routes[state.index].key === (action.state && action.state.key)) return state
            return NavigationStateUtils.push(state, action.state)

        case Constants.NAV_POP:
            if (state.index === 0 || state.routes.length === 1) return state
            return NavigationStateUtils.pop(state)

        case Constants.NAV_JUMP_TO_KEY:
            return NavigationStateUtils.jumpTo(state, action.key)

        case Constants.NAV_JUMP_TO_INDEX:
            return NavigationStateUtils.jumpToIndex(state, action.index)

        case Constants.NAV_RESET:
            return {
                ...state,
                index: action.index,
                routes: action.routes
            }
        default:
            return state
    }
}
