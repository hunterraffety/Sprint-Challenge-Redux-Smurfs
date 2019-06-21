// dependencies
import axios from 'axios';

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

// action exports
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADDING_START = 'ADDING_START';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

// action creators
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_START });
  return axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(`coming from actions / post: `, res.data);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAILURE, payload: err.response.data.error });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_START });
  return axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(`from addsmurf`, res);
      dispatch({ type: ADDING_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADDING_FAILURE,
        payload: err
      });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_START });
  return axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(`from delete`, res);
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: DELETE_FAILURE,
        payload: err.response.data
      });
    });
};
