import React  from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from '../Button/Button';
import { signin, signup, checkToken } from "../../utils/auth";

import s from "./style.module.css"
import {EMAIL_REGEXP, PASSWORD_REGEXP, MESSAGES, GROUP} from '../../utils/constants'

const RegistrationForm = () => {
    const location = useLocation();
    const {
        register, //спец функция, кот подключаем к каждому из полей ввода. Принимает и проверяет знач, кот вводится пользователем в каждое поле. То, что сюда записываем в последующем будем передавать в ф-ию при отправке формы
        handleSubmit, //собирает данные с полей ввода и мы получаем их в onSubmit в виде объекта (data)
        formState: { errors } 
    } = useForm({mode: 'onBlur'});

    const onSubmit = (data) => {
        signup(data).then((data) => console.log(data))
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}> {/* это из документации react-hook-form */}
           <h2 className={s.title}>Регистрация</h2>
            <Input {...register("email", {required: true, pattern: {value: EMAIL_REGEXP, message: MESSAGES.incorrectEmail}})}
                type="email"
                placeholder="Email"
                autoComplete="off"/>
            {errors?.email && <div className={s.error}>{errors.email.message}</div>}
            <Input {...register("password", {required: true, pattern: {value: PASSWORD_REGEXP, message: MESSAGES.incorrectPassword}})}
                type="password"
                placeholder="Password"
                autoComplete="new-password"/>
            {errors?.password && <div className={s.error}>{errors.password.message}</div>}
            <Input {...register("group", {required: true, /* pattern: {value: GROUP, message: MESSAGES.incorrectGroup} */})}
                type="group"
                placeholder="group-8"/>
            {errors?.group && <div className={s.error}>{errors.group.message}</div>}
            <div className={s.info}>Регистрируясь на сайте, Вы соглашаетесь с Правилами</div>
            <Button type='primary'>Зарегистрироваться</Button>
            <Link to='/login' state={{backgroundLocation: location}} replace={true}>
                <Button type='secondary'>Войти</Button>
            </Link>
        </form>
    )
};

export default RegistrationForm;