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
        stat: []
      },
      {
        slotType: ['grenade'],
        numInList: 5,
        stat: []
      }
    ],
    armorSlots: [
      {
        slotType: ['underarmor'],
        numInList: 6,
        stat: []
      },
      {
        slotType: ['helmet'],
        numInList: null,
        stat: []
      },
      {
        slotType: ['eyes'],
        numInList: null,
        stat: []
      },
      {
        slotType: ['mask'],
        numInList: null,
        stat: []
      },
      {
        slotType: ['chest'],
        numInList: null,
        stat: []
      },
      {
        slotType: ['l-arm'],
        numInList: null,
        stat: []
      },
      {
        slotType: ['r-arm'],
        numInList: null,
        stat: []
      },
      {
        slotType: ['l-leg'],
        numInList: null,
        stat: []
      },
      {
        slotType: ['r-leg'],
        numInList: null,
        stat: []
      }
    ]
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
