import { useContext } from "react";
import { UserContext } from "../../context/appContext";
import SucсessAlert from "../Alert/SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import RegistrationAlert from "./RegistrationAlert";
import ResetAlert from "./ResetAlert";

const Alert = () => {
    const Context = useContext(UserContext);

    if (Context.loggedIn === true) {
        return (
            <SucсessAlert />
        )
    } else if (Context.openErrorAlert === true) {
        return (<ErrorAlert />)
    } else if (Context.openRegistrationAlert === true) {
        return (<RegistrationAlert />)
    } else if (Context.openResetAlert === true) {
        return (<ResetAlert />)
    }

}

export default Alert;

