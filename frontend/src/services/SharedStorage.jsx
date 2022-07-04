import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {

    const [colecciones, setColecciones] = useState([
        {
            tagtext: "",
            tagpath: "",
            count: 0,
            pluralize: true,
            tagdelbutton: true,
        }
    ]);

    const [calzados, setCalzados] = useState([
        {
            iditem: "",
            imgUrl: "",
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