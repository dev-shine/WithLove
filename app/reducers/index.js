import { combineReducers } from 'redux';
// Just Sample
let initialState = { data: [], loading:true };

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;