import { Link, useLocation } from 'react-router-dom';
import s from "./style.module.css";
import {ReactComponent as Like} from "../../images/save.svg";
import {ReactComponent as Cart} from "../../images/Cart.svg";
import {ReactComponent as Profile} from "../../images/Profile.svg";
import {ReactComponent as LogOut} from '../../images/arrow-right-from-bracket-solid.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/appContext';

function User({logout}) {
    const location = useLocation();
    const Context = useContext(UserContext);
    return (
        <>
            <div className={s.container}>
                <Like></Like>
                <Cart></Cart>
                
                {
                    (Context.loggedIn === true) ? 
                    (<LogOut className={s.logout} onClick={logout}></LogOut>) :
                    (
                        <Link to={'/login'} state={{backgroundLocation: location, mainUrl: location.pathname}}>
                            <Profile></Profile>
                        </Link>
                    )
                }

            </div>
        </>
    );
}
// () => console.log('click')}
// onClick={() => {func1();func2();}}
export default User