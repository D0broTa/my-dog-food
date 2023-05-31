import { useNavigate } from 'react-router-dom';

import s from './style.module.css';

import { ReactComponent as Cross } from '../../images/ic-close-input.svg';

const Modal = ( {children} ) => {
    const navigate = useNavigate();

    const onClose = () => { //функция закрытия модального окна, при нажатии на крестик
        navigate(-1);       //рендерим предыдущий урл
    }

    return(
        <>
            
            <div className={s.modal}>
            
                <div className={s.content}>
                
                    <Cross className={s.cross} onClick={onClose}/>
                    {children}
                </div>
                
            </div>
            
        </>
        
    )
}

export default Modal;




    // if (Context.loggedIn === 'login') {
    //     return (
    //         <SucсessAlert />
    //     )
    // } else if (Context.loggedIn === 'errorAuth') {
    //     return (
    //         <ErrorAlert />
    //     )
    // }