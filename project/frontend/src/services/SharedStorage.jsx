import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider ( {children} ) {

    const [ colecciones, setColecciones ] = useState([
        {    
            tagtext: "",
            tagpath: "",
            count: 0,
            pluralize: true,
            tagdelbutton: true,
        }
    ]);

    const [ calzados, setCalzados ] = useState([
        {
            iditem: "",
            imgUrl: "",
        }
    ]);

    const [ userData, setUserData ] =useState([
        {
            name: "",
            email:"",
            password:""
        }
    ]);

    const storage = {
        states: {
            colecciones,
            calzados,
            userData
        },
        actions: {

        }
    };

    return (
        <Context.Provider value={storage}>
            {children}
        </Context.Provider>
    );
}