import { Context } from "./SharedStorage";
import { useContext } from "react";
import Login from "../components/Login/Login.jsx";

function Authorization ({children}) {

    const [ store ] = useContext(Context);

    return(
        <>
        { store.id ? children : <Login/> }
        </>
    );
}
export default Authorization;