import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import User from "../User/User"

import s from "./style.module.css"

function Header({loggedIn, logout, hi}) {
    const twoFunc = () => {
        logout();
        hi()
    }
    return (<header className={s.header}>
        <Link to='/'>
            <Logo />
        </Link>
        <button onClick={twoFunc}>ClearLocalStorage</button>
        <Search />
        <User loggedIn={loggedIn} logout={logout} onClick={logout}></User>

    </header>
    )
}

export default Header;