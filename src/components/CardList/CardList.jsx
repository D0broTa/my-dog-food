import React from "react";
import s from './style.module.css';
import ElemCardList from '../ElemCardList/ElemCardList';
import {UserContext} from '../../context/appContext'

const CardList = () => {
    const Context = React.useContext(UserContext)
    console.log(Context.products)
    return (
        // <ElemCardList></ElemCardList>
        <div className={s.cardList}>
            {Context.products.map((product) => (
                <ElemCardList key={product.id} {...product}> </ElemCardList>
            ))}
        </div>
    )
}

export default CardList;