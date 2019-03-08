/*
  Be sure to import in all of the action types from `../actions`
*/

import { GET_SMURFS, ADD_SMURF, SPINNER_ON, SPINNER_OFF } from "../actions/index";

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export function smurfsReducer(smurfsArray = [], action) {
  switch (action.type) {
      case GET_SMURFS:
          return action.payload;
      case ADD_SMURF:
          return action.payload;
      default:
          return smurfsArray;
  }
}

export function spinner(isOn = false, action) {
  switch (action.type) {
      case SPINNER_ON:
          return true;
      case SPINNER_OFF:
          return false;
      default:
          return isOn;
  }
}
