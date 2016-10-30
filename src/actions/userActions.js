import {Constants} from '../constants/actions';


const Actions = {

    loadUser: () =>{
        return dispatch => {
            dispatch({type:Constants.LOAD_USER_SUCCESS})
        }
    }

}

export default Actions;
