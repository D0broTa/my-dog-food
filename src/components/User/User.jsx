import s from "./style.module.css";
import {ReactComponent as Like} from "../../images/save.svg";
import {ReactComponent as Cart} from "../../images/Cart.svg";
import {ReactComponent as Profile} from "../../images/Profile.svg";

function User() {
    return (
        <>
            <div className={s.container}>
                <Like></Like>
                <Cart></Cart>
                <Profile></Profile>
            </div>
        </>
    );
}

export default User