import React from 'react';
import s from './style.module.css'
import { ReactComponent as Cross } from '../../images/ic-close-input.svg';
import {ReactComponent as SearchIcon} from '../../images/ic-search.svg';

function Search(/* {onSearch} */) {
    const [text, setText] = React.useState('')

    const onChange = (event) => {
        event.preventDefault();
        setText(event.target.value)
        
    }
    const onClose = (event) => {
        event.preventDefault();
        setText('')
    }

    return (
        <form className={s.container}>
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