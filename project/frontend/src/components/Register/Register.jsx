import { useContext, useState } from "react";
import { Context } from "../../storage/Sharedtorage.jsx";
import { API_URL, post } from "../../aux_api";
import "./RegisterStyle.module.css"

function Register () {

    const [ store, setStore ] = useContext(Context);

    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    function userInputChangeHandler ( event ) {
        setUserName(event.target.value)
    }

    function emailInputChangeHandler ( event ) {
        setEmail(event.target.value)
    }

    function passwordInputChangeHandler ( event ) {
        setPassword(event.target.value)
    }

    async function clickHandler () {
        const newStore = {...store};
        const data = JSON.stringify({userName, email, password});
        newStore.email = await post(API_URL+"/login/",data);
        newStore.password = password;
        setStore(newStore);
    }

    return (
        <>
            <h3>
                <br>Regístrate ahora</br>
                <br>Crea una cuenta</br>
                <br>y guarda tus</br>
                <br> preferencias.</br>
            </h3>
            <input onChange={userInputChangeHandler} type="text" placeholder="Nombre"/>
            <input onChange={emailInputChangeHandler} type="text" placeholder="Email"/>
            <input onChange={passwordInputChangeHandler} type="password" placeholder="Password"/>
            <button onClick={clickHandler}>Crear cuentas</button>
        </>
    )
}

export default Register