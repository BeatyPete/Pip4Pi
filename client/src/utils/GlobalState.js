import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    mainTab: 'STAT',
    currentHealth: 80,
    itemSlots: [
      {
        slotType: 'weapon',
        numInList: null,
        damType: [
          {
              icon: 'physical',
              value: 200
          }
        ]
      },
      {
        slotType: 'grenade',
        numInList: null,
        damType: [
          {
              icon: 'physical',
              value: 200
          }
        ]
      },
    ]
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
