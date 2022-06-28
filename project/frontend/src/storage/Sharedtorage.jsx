import { useState, createContext } from "react";

export const Context = createContext(); 

export function ContextProvider ( {children} ) {

    const [ colecciones, setColecciones ] = useState([
        /*{    
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
        },
        {
            tagtext: "San Juan",
            tagpath: "/san-juan/",
            count: 3,
            pluralize: true,
            tagdelbutton: false,
        }*/
    ]);

    const [ calzados, setCalzados ] = useState([
        {
            iditem: "f34b98",
            imgUrl: "../img/calzado2.jpg",
        }
    ]);
    
    const [ nombres, setnombres ] =useState([
        {
            name: "Tania",
        }
    ]);

    const storage = {
        states: {
            colecciones,
            calzados,
            nombres
        },
        actions: {

        }
    }

    return (
        <Context.Provider value={storage}>
            {children}
        </Context.Provider>
    )
}