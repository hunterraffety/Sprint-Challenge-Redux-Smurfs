/*
  Be sure to import in all of the action types from `../actions`
*/

// action imports
import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADDING_START,
  ADDING_SUCCESS,
  ADDING_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from '../actions/index';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

// initial state
const initialState = {
  addingSmurf: false,
  deletingSmurf: false,
  error: '',
  fetchingSmurfs: false,
  smurfs: [],
  updatingSmurf: false
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

// reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        fetchingSmurfs: true,
        error: action.payload
      };
    case ADDING_START:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      };
    case ADDING_SUCCESS:
      return {
        ...state,
        error: '',
        addingSmurf: false,
        smurfs: []
      };
    case ADDING_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case DELETE_START:
      return {
        ...state,
        deletingSmurf: true,
        error: '',
        smurfs: []
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        error: '',
        deletingSmurf: false,
        smurfs: action.payload
      };
    case DELETE_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
