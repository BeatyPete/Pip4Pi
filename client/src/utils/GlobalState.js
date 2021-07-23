import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    mainTab: 'STAT',
    currentHealth: 80,
    weaponSlots: [
      {
        slotType: ['weapon'],
        numInList: null,
        damType: []
      },
      {
        slotType: ['grenade'],
        numInList: 5,
        damType: []
      }
    ],
    armorSlots: [
      {
        slotType: ['underarmor'],
        numInList: 6,
        resists: []
      },
      {
        slotType: ['helmet'],
        numInList: null,
        resists: []
      },
      {
        slotType: ['eyes'],
        numInList: null,
        resists: []
      },
      {
        slotType: ['mask'],
        numInList: null,
        resists: []
      },
      {
        slotType: ['chest'],
        numInList: null,
        resists: []
      },
      {
        slotType: ['l-arm'],
        numInList: null,
        resists: []
      },
      {
        slotType: ['r-arm'],
        numInList: null,
        resists: []
      },
      {
        slotType: ['l-leg'],
        numInList: null,
        resists: []
      },
      {
        slotType: ['r-leg'],
        numInList: null,
        resists: []
      }
    ]
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
