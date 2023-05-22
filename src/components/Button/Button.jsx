import s from './style.module.css'
import cn from 'classnames'

function Button({type, children, props}) {
    return (
        <button onClick={props} className={cn(s.button, {[s.secondary]: type === 'secondary'}, {[s.primary]: type === 'primary'})} >{children}</button>
    )
};

export default Button;