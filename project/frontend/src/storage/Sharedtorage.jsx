import { useState, createContext } from "react";

export const Context = createContext(); 

export function ContextProvider ( {children} ) {

    const store = useState(
        {    
            tagtext: "Verano",
            tagpath: "/verano/",
            count: 16,
            pluralize: true,
            tagdelbutton: true,
        }
    );

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}