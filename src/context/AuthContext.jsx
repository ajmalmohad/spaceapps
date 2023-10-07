import React, { createContext, useContext, useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import { getAuth } from "firebase/auth";
  
const AppContext = createContext();
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw Error('useAppContext must be used in AppContextProvider')
    return context;
};
  
export const AppContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const auth = getAuth();

    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, auth }}>
            {children}
        </AppContext.Provider>
    );
};
  
AppContextProvider.propTypes = {
    children: Proptypes.node.isRequired,
};