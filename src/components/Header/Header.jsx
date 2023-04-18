import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import User from "../User/User"

import s from "./style.module.css"

function Header() {
    return (<header className={s.header}>
        <Logo />
        <Search />
        <User></User>

    </header>
    )
}

export default Header;