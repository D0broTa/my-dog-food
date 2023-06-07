import React from 'react';
import s from './style.module.css'
import { ReactComponent as Cross } from '../../images/ic-close-input.svg';
import {ReactComponent as SearchIcon} from '../../images/ic-search.svg';
import {UserContext} from '../../context/appContext'

function Search() {
    const [text, setText] = React.useState('')
    const Context = React.useContext(UserContext)
    const products = Context.products
    // console.log(products)
    
    const onChange = (event) => {
        event.preventDefault();
        setText(event.target.value);
    }

    const onSearch = (array, elemTitle, context) => {                        // поиск в контекстном массиве продуктов
        let resultSearchArray = [];                                 // по совпадению с символами поисковой строки
        for (let i = 0; i < array.length; i++) {
            // console.log(array[i].title)
            if (array[i].title.toLowerCase().indexOf(elemTitle.toLowerCase()) > 0) {
                resultSearchArray.push(array[i])
            }
        }
        context.searchResultArray = resultSearchArray;
        return console.log(context);
    }

    const SearchProductsOnTitle = (event) => {
        event.preventDefault();
        onSearch(products, text, Context);
        // console.log(Context.searchProducts)
    }

    const onClose = (event) => {
        event.preventDefault();
        setText('');
        Context.searchResultArray = null;
        console.log(Context.searchResultArray, Context);
    }

    return (
        <form className={s.container} onSubmit={SearchProductsOnTitle}>
            <input className={s.input} onChange={onChange} type="text" value={text} placeholder="Поиск..." />
            {
                (text !== '') ?
                (<Cross className={s.icon} onClick={onClose}/>) :
                (<SearchIcon className={s.icon}/>)
            }

        </form>
    )
}
export default Search