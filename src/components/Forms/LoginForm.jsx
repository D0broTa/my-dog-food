import React, {useState, useContext}  from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from '../Button/Button';
import { signin, signup, checkToken, signInStatus, checkSignIn } from "../../utils/auth";
import {setItem} from '../../utils/localStorage'
import ErrorAlert from '../Alert/ErrorAlert'
import SuccessAlert from '../Alert/SuccessAlert'
import Modal from "../Modal/Modal";
import { UserContext } from "../../context/appContext";
import Alert from "../Alert/Alert";


import s from "./style.module.css"
import {EMAIL_REGEXP, PASSWORD_REGEXP, MESSAGES} from '../../utils/constants'

const LoginForm = () => {
    const Context = useContext(UserContext)
    const {setOpenErrorAlert, currentUser, setCurrentUser} = useContext(UserContext)
    
    const openErrorAlert = () => {
        setOpenErrorAlert(true)
        console.log(Context)
    }

    const location = useLocation();
    const navigate = useNavigate();
    
    const onSubmit = (dataForm) => {                    //тут записываем в data данные из формы
        signin(dataForm)
            .then((data) => {
                setItem('JWT', data.token);       //то сохраняем полученный от серера токен в localStorage
                navigate('/catalog');             //и переходим на страницу каталога
                Context.currentUser.username = dataForm.username;
                Context.loggedIn = true;
                console.log(Context.loggedIn)
            })
            .catch(err => (openErrorAlert()))
        
    }

    const {
        register, //спец функция, кот подключаем к каждому из полей ввода. Принимает и проверяет знач, кот вводится пользователем в каждое поле. То, что сюда записываем в последующем будем передавать в ф-ию при отправке формы
        handleSubmit, //собирает данные с полей ввода и мы получаем их в onSubmit в виде объекта (data)
        formState: { errors } 
    } = useForm({
            mode: 'onBlur',
            defaultValues: {
                username: 'johnd',
                password: 'm38rmF$',
            },
        });

    return (
            <>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}> {/* это из документации react-hook-form */}
                <h2 className={s.title}>Вход</h2>
                {/* <Input {...register("email", {required: true, pattern: {value: EMAIL_REGEXP, message: MESSAGES.incorrectEmail}})}
                 type="text"
                     placeholder="Email"
                     autoComplete="off"/>
                {errors?.email && <div className={s.error}>{errors.email.message}</div>} */}
                <Input {...register("username", {required: true, minLength : {value: 3, message: 'Минимум три символа'}})}
                    type="text"
                    placeholder="Username" />
                {errors?.username && <div className={s.error}>{errors.username.message}</div>}
                <Input {...register("password", {required: true, minLength : {value: 3, message: 'Минимум три символа'}})}
                    type="text"
                    placeholder="Password"/>
                {errors?.password && <div className={s.error}>{errors.password.message}</div>}
                {/* <Input {...register("group", {required: true, pattern: {value: GROUP, message: MESSAGES.incorrectGroup}})}
                    type="group"
                    placeholder="group-8"/>
                {errors?.group && <div className={s.error}>{errors.group.message}</div>} */}
                <Link to='/reset' state={{backgroundLocation: location}} replace={true}>
                    <div className={s.info}>Восстановить пароль</div>
                </Link>
                <Button type='primary' >Войти</Button>
                <Link to='/registration' state={{backgroundLocation: location}} replace={true}>
                    <Button type='secondary'>Регистрация</Button>
                </Link>
            </form>
            
            </>
        )   
};

export default LoginForm;

// const LoginForm = ({handleLogin}) => {
//     const isLogin = false;
//     console.log(isLogin)
//     const location = useLocation();
//     const navigate = useNavigate();
//     const onSubmit = (data) => {
//         signin(data).then((data) => {
//            if (!data.error) {               //если нет ошибки в отправляемых данных при авторизации
//             setItem('JWT', data.token);      //то сохраняем полученный от серера токен в localStorage
//             navigate('/catalog');            //и переходим на страницу каталога
//             {isLogin = true};
//            }
//         })
//     };
//     const {
//         register, //спец функция, кот подключаем к каждому из полей ввода. Принимает и проверяет знач, кот вводится пользователем в каждое поле. То, что сюда записываем в последующем будем передавать в ф-ию при отправке формы
//         handleSubmit, //собирает данные с полей ввода и мы получаем их в onSubmit в виде объекта (data)
//         formState: { errors } 
//     } = useForm({
//             mode: 'onBlur',
//             defaultValues: {
//                 username: 'johnd',
//                 password: 'm38rmF$',
//             },
//         });
    
//     return (
//         <>
//         <form className={s.form} onSubmit={handleSubmit(onSubmit)}> {/* это из документации react-hook-form */}
//             <h2 className={s.title}>Вход</h2>
//             {/* <Input {...register("email", {required: true, pattern: {value: EMAIL_REGEXP, message: MESSAGES.incorrectEmail}})}
//              type="text"
//                  placeholder="Email"
//                  autoComplete="off"/>
//             {errors?.email && <div className={s.error}>{errors.email.message}</div>} */}
//             <Input {...register("username", {required: true, minLength : {value: 3, message: 'Минимум три символа'}})}
//                 type="text"
//                 placeholder="Username" />
//             {errors?.username && <div className={s.error}>{errors.username.message}</div>}
//             <Input {...register("password", {required: true, minLength : {value: 3, message: 'Минимум три символа'}})}
//                 type="text"
//                 placeholder="Password"/>
//             {errors?.password && <div className={s.error}>{errors.password.message}</div>}
//             {/* <Input {...register("group", {required: true, pattern: {value: GROUP, message: MESSAGES.incorrectGroup}})}
//                 type="group"
//                 placeholder="group-8"/>
//             {errors?.group && <div className={s.error}>{errors.group.message}</div>} */}
//             <Link to='/reset' state={{backgroundLocation: location}} replace={true}>
//                 <div className={s.info}>Восстановить пароль</div>
//             </Link>
//             <Button type='primary'>Войти</Button>
//             <Link to='/registration' state={{backgroundLocation: location}} replace={true}>
//                 <Button type='secondary' onClick={() => handleLogin(isLogin)}>Регистрация</Button>
//             </Link>
//         </form>
//         </>
//     )
// };