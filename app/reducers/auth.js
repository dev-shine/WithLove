import _ from 'lodash'
import {
    OPERATION_FAILED,
    API_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from '../consts/actionTypes';

const initialState = {
   apiLoading: false,
   user: {},
   errors: null,
   isLoggedIn: false,
   token: null,
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
      case API_LOADING:
        newState.apiLoading = true;
        return newState;
      case OPERATION_FAILED:
        newState.apiLoading = false;
        newState.errors = action.errors
        return newState;
      case LOGIN_SUCCESS:
        newState.apiLoading = false;
        console.log(action.result, '---------------')
        newState.token = action.result.user.token
        newState.isLoggedIn = true
        return newState
      case LOGOUT_SUCCESS:
        newState.isLoggedIn = false
        newState.token = null
        newState.errors = null
        return newState
      default:
          return state;
    }
};

export default reducer;