import React from "react";
import s from './styled.module.css';

const SearchResult = (array) => {

    let quantity = array.length;

    if (quantity) {
        return (
        <div>По вашему запросу найдено <span>{quantity}</span> товаров</div>
        )
        } else {
            return (
                <div>По вашему запросу товаров не найдено</div>
            )
        }
}

export default SearchResult