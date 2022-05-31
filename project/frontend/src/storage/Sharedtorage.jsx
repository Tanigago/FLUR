import { useState, createContext } from "react";

export const Context = createContext(); 

export function ContextProvider ( {children} ) {

    const [ colecciones, setColecciones ] = useState([
        {    
            tagtext: "Verano",
            tagpath: "/verano/",
            count: 16,
            pluralize: true,
            tagdelbutton: true,
        },
        {    
            tagtext: "Playa",
            tagpath: "/playa/",
            count: 8,
            pluralize: true,
            tagdelbutton: false,
        }
    ]
    );

    const [ calzados, setCalzados ] = useState([])

    const context = {
        states: {
            colecciones,
            calzados
        },
        actions: {

        }
    }

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}