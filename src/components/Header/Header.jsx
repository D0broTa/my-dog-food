import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/appContext";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import User from "../User/User"

import s from "./style.module.css"

function Header({logout}) {
    const Context = useContext(UserContext)

    return (<header className={s.header}>
        { (Context.loggedIn === false) ?
            (<Link to='/' className={s.logo}>
                <Logo />
            </Link>) :
            (<Link to='/catalog' className={s.logo}>
                <Logo  />
            </Link>)
        }
        { (Context.loggedIn === true) &&
          (<Search />)
          
        }
        <User logout={logout} onClick={logout}></User>

    </header>
    )
}

export default Header;