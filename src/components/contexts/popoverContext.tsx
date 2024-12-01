import { createContext } from 'react';

type PopOverContextType = {
  isOpen:    boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const PopOverContextState = {
  isOpen:      false,
  setIsOpen: () => {},
};

const PopOverContext = createContext<PopOverContextType>(
  PopOverContextState,
);

export default PopOverContext;
