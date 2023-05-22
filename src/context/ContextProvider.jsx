import { UserContext } from "./appContext";

const ContextProvider = ({children}) => {
    const [errorAlert, setErrorAlert] = useState(false);

    const errorAlertOn = () => setErrorAlert(true)

    return (
        <UserContext.Provider value={{errorAlert, setErrorAlertOn, currentUser, loggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider;