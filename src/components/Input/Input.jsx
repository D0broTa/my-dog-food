import  React from 'react'; //нужно использовать, чтобы работал register. register работает только с ref, ref нельзя передать через пропсы, поэтому используем спец ф-ию реакта forwardRef
import s from './style.module.css'

const Input = React.forwardRef((props, ref) => {
    return <input className={s.input} ref={ref} {...props}/>
});

export default Input;