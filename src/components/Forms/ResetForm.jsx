import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from '../Button/Button';

import s from "./style.module.css"
import {EMAIL_REGEXP, PASSWORD_REGEXP, MESSAGES} from '../../utils/constants'

const ResetForm = () => {
    
    const {
        register, //спец функция, кот подключаем к каждому из полей ввода. Принимает и проверяет знач, кот вводится пользователем в каждое поле. То, что сюда записываем в последующем будем передавать в ф-ию при отправке формы
        handleSubmit, //собирает данные с полей ввода и мы получаем их в onSubmit в виде объекта (data)
        formState: { errors } 
    } = useForm({mode: 'onBlur'});

    const onSubmit = (data) => console.log(data)

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}> {/* это из документации react-hook-form */}
           <h2 className={s.title}>Восстановление пароля</h2>
           <div className={s.info}>Для получения временного пароля необходимо ввести email, указанный при регистрации</div>
            <Input {...register("email", {required: true, pattern: {value: EMAIL_REGEXP,  message: MESSAGES.incorrectEmail}})}
             type="email"
             placeholder="Email"
             autoComplete="off"/>
            {errors?.email && <div className={s.error}>{errors.email.message}</div>}
            <div className={s.info}>Срок действия временного пароля 24 часа</div>
            <Button type='primary'>Отправить</Button>
        </form>
    )
};

export default ResetForm;