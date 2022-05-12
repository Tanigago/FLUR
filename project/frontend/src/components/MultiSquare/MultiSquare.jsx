//import { Link } from "react-router-dom";

function MultiSquare ({children, action}) {
    
    return (
        <button onClick={action}>
            {children}
        </button>
    )
}
export default MultiSquare