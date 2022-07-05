import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {

    const [colecciones, setColecciones] = useState([ //BORRAR GRUPO
        {
            tagtext: "",
            tagpath: "",
            count: 0,
            pluralize: true,
            tagdelbutton: true
        }
    ]);

    const [coleccion, setColeccion] = useState([
        {
            nombre: "",
            warm: "",
            waterproof: "",
            season: ""
        }
    ]);

    const [calzados, setCalzados] = useState([
        {
            iditem: "",
            imgUrl: ""
        }
    ]);

    const [userData, setUserData] = useState([
        {
            name: "",
            email: "",
            token: ""
        }
    ]);

    const storage = {
        states: {
            colecciones,
            coleccion,
            calzados,
            userData
        },
        actions: {
            updateUserData: function (userDataIdx, newUserData) {
                const oldUserData = [...userData]
                oldUserData[userDataIdx] = newUserData
                setUserData([...oldUserData])
            }
        }
    };

    return (
        <Context.Provider value={storage}>
            {children}
        </Context.Provider>
    );
}