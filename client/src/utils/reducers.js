import { useReducer } from "react";
import {
  CHANGE_MAIN_TAB,
  CHANGE_WEAPON,
  CHANGE_ARMOR
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_MAIN_TAB:
      return {
        ...state,
        mainTab: action.mainTab,
      };
    case CHANGE_WEAPON:
      return {
        ...state,
        weaponSlots: action.slots,
      };
    case CHANGE_ARMOR:
      return {
        ...state,
        armorSlots: action.slots,
      };
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}