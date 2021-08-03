import { useReducer } from "react";
import {
  CHANGE_MAIN_TAB,
  CHANGE_WEAPON,
  CHANGE_ARMOR,
  CHANGE_SETTINGS,
  CHANGE_STATS,
  CHANGE_DAMAGE,
  CHANGE_RESISTANCE,
  CHANGE_LIMBS
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
    case CHANGE_SETTINGS:
      return {
        ...state,
        settings: action.settings,
      };
    case CHANGE_STATS:
      return {
        ...state,
        charStats: action.charStats,
      };
    case CHANGE_DAMAGE:
      return {
        ...state,
        damage: action.damage,
      };
    case CHANGE_RESISTANCE:
      return {
        ...state,
        damResist: action.damResist,
      };
    case CHANGE_LIMBS:
      return {
        ...state,
        limbs: action.limbs,
      };
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}