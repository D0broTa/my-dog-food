import { useContext } from "react";
import { UserContext } from "../../context/appContext";
import SucсessAlert from "../Alert/SuccessAlert";
import ErrorAlert from "../Alert/ErrorAlert";

const Alert = () => {
    const Context = useContext(UserContext);

    if (Context.loggedIn === true) {
        return (
            <SucсessAlert />
        )
    } else {
        return (
            <ErrorAlert />
        )
    }

    // return (
    //     <>
    //     {
    //         (Context.loggedIn === true) ?
    //         (<SucсessAlert />)
    //          :<ErrorAlert />
    //         ()
    //     }
    //     {
    //         if (signInStatus === false) {
    //             (<SucсessAlert />)
    //         } else
    //     }

    //     </>
    // )
}

export default Alert;

