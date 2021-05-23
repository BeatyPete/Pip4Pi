import { useReducer } from "react";
import {
  CHANGE_MAIN_TAB
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MAIN_TAB:
      return {
        ...state,
        mainTab: action.mainTab,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}