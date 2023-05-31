import React  from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from '../Button/Button';
import { UserContext } from "../../context/appContext";
import {ReactComponent as CloseEye} from '../../images/eye-slash-regular.svg'
import {ReactComponent as OpenEye} from '../../images/eye-regular.svg'

import s from "./style.module.css"

const RegistrationForm = ({title}) => {
    const [visiblePassword, setVisiblePassword] = React.useState(false)
    let type;
    if (visiblePassword) {
        type = 'text'
       } else {
        type = 'password'
       }

    document.title = `${title}`
    const {openRegistrationAlert, setOpenRegistrationAlert, setNewUser} = React.useContext(UserContext)
    const Context = React.useContext(UserContext)

    const location = useLocation();
    const {
        register, //спец функция, кот подключаем к каждому из полей ввода. Принимает и проверяет знач, кот вводится пользователем в каждое поле. То, что сюда записываем в последующем будем передавать в ф-ию при отправке формы
        handleSubmit, //собирает данные с полей ввода и мы получаем их в onSubmit в виде объекта (data)
        formState: { errors } 
    } = useForm({mode: 'onBlur'});

    const onSubmit = (data) => {
        setNewUser({...data})
        console.log(Context)
        setOpenRegistrationAlert(true);
        console.log(openRegistrationAlert)
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}> {/* это из документации react-hook-form */}
           <h2 className={s.title}>Регистрация</h2>
           <Input {...register("username", {required: true, minLength : {value: 3, message: 'Минимум три символа'}})}
                    type="text"
                    placeholder="Username" />
                    {errors?.username && <div className={s.error}>{errors.username.message}</div>}
            <Input {...register("password", {required: true, minLength : {value: 3, message: 'Минимум три символа'}})}
                    type={type}
                    placeholder="Password"/>
            {
                (visiblePassword) ?
                (<OpenEye className={s.icon} onClick={()=>setVisiblePassword(false)}></OpenEye>) :
                (<CloseEye className={s.icon} onClick={()=>setVisiblePassword(true)}></CloseEye>)
            }
            {errors?.password && <div className={s.error}>{errors.password.message}</div>}
            <div className={s.info}>Регистрируясь на сайте, Вы соглашаетесь с <Link to='/rules' target="_blank">Правилами</Link></div>
            <Button type='primary'>Зарегистрироваться</Button>
            <Link to='/login' className={s.link} state={{backgroundLocation: location}} replace={true}>
                <Button type='secondary'>Войти</Button>
            </Link>
        </form>
    )
};

export default RegistrationForm;