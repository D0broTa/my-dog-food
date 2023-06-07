import React from "react";
import s from './style.module.css';
import ElemCardList from '../ElemCardList/ElemCardList';
import {UserContext} from '../../context/appContext';

const CardList = () => {
    const Context = React.useContext(UserContext)
    const renderProducts = React.useRef(Context.products);
    if (Context.searchResultArray) {
        renderProducts.current = (Context.searchResultArray)
    } else {
        renderProducts.current = (Context.products)
    }
    // console.log(renderProducts.current)

    // React.useEffect(() => {
    //     if (Context.searchResultArray) {
    //         renderProducts.current = (Context.searchResultArray)
    //     } else {
    //         renderProducts.current = (Context.products)
    //     }
    //     console.log(renderProducts.current)
    // }, [renderProducts, Context.searchResultArray, Context.products])


    return (
        <div className={s.cardList} ref={renderProducts}>
                 {renderProducts.current.map((product) => (
                     <ElemCardList key={product.id} {...product}> </ElemCardList>
                 ))}
             </div>
    )
    // if (Context.searchResultArray) {
    //     return (
    //         <div className={s.cardList}>
    //             {Context.searchResultArray.map((product) => (
    //                 <ElemCardList key={product.id} {...product}> </ElemCardList>
    //             ))}
    //         </div>
    //     )
    // } else {
    //     return (
    //         // <ElemCardList></ElemCardList>
    //         <div className={s.cardList}>
    //             {Context.products.map((product) => (
    //                 <ElemCardList key={product.id} {...product}> </ElemCardList>
    //             ))}
    //         </div>
    //     )
    // }
    
}

export default CardList;