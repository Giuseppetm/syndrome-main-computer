import { createContext, useState } from "react";

const defaultState = { 
    blockScrollAnimation: false
};

const GlobalContext = createContext(defaultState);

export const GlobalProvider = ({ children }) => {
    const [blockScrollAnimation, setBlockScrollAnimation] = useState(false);

    return (
        <GlobalContext.Provider value={{ blockScrollAnimation, setBlockScrollAnimation }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;