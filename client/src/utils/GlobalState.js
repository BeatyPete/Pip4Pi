import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    mainTab: 'STAT',
    weaponSlots: [],
    armorSlots: [],
    charStats: {
      name: 'Sole Survivor',
      currentHealth: 90,
      maxHealth: 90,
      currentAP: 70,
      maxAP: 70,
      currentLevel: 1,
      levelFillPercent: '80%',
      caps: 670,
      currentWeight: 0,
      maxWeight: 165
    },
    damage: {
      physical: 18,
      energy: 0,
      radiation: 0
    },
    damResist:{ 
      physical: 0,
      energy: 0,
      radiation: 0
    },
    limbs: {
      head: "100%",
      lArm: "100%",
      rArm: "100%",
      /* chest: "100%", */ 
      lLeg: "100%",
      rLeg: "100%",
    },
    settings: {
      width: '70vw',
      height: '54vw',
      positionX: '0px',
      positionY: '0px',
      r: 2,
      g: 253,
      b: 0
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
