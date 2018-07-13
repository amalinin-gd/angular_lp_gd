import * as AppActions from "./actions";
import {State} from "./state";

const initialState: State = {
  isLoggedIn: false,
  requestInProgress: false
};

export function reducer (state = initialState, action: AppActions.Actions): State {
  switch (action.type) {
    case AppActions.LOGIN:
      return {
        ...state,
        requestInProgress: true,
      };
    case AppActions.LOGGED_IN:
      return {
        ...state,
        requestInProgress: false,
        sessionTokenName: action.payload.sessionTokenName
      };
    default:
      return state;
  }
}
