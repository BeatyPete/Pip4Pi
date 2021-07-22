import { useReducer } from "react";
import {
  CHANGE_MAIN_TAB,
  EQUIP_WEAPON
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MAIN_TAB:
      return {
        ...state,
        mainTab: action.mainTab,
      };
    case EQUIP_WEAPON:
      return {
        ...state,
        weaponSlots: action.weaponSlots,
      };
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}