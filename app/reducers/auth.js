import _ from 'lodash'
import {
    OPERATION_FAILED,
    API_LOADING,
    LOGIN_SUCCESS,
} from '../consts/actionTypes';

const initialState = {
   apiLoading: false,
   user: {},
   error: '',
   isLoggedIn: false,
   token: '',
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
      case API_LOADING:
        newState.apiLoading = true;
        return newState;
      case OPERATION_FAILED:
        newState.apiLoading = false;
        newState.error = 'Login Failed'
        return newState;
      case LOGIN_SUCCESS:
        newState.apiLoading = false;
        newState.token = action.result.token
        newState.isLoggedIn = true
        return newState
      default:
          return state;
    }
};

export default reducer;