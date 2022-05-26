import { useState, createContext } from "react";

export const Context = createContext(); 

export function ContextProvider ( {children} ) {

    const store = useState({
        calzado: [],
        tagtext: "Verano",
        tagpath: "/verano/",
        count: 12,
        pluralize: true,
        tagdelbutton: true,
        
    });

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}