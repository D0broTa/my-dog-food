import Logo from "../Logo/Logo";
import s from './style.module.css';
import { Link } from "react-router-dom";
import cn from 'classnames';
import telegram from '../../images/Telegram.svg';
import instagram from '../../images/Instagram.svg';
import viber from '../../images/Viber.svg';
import whatsapp from '../../images/WhatsApp.svg';
import vk from '../../images/VK.svg';

function Footer() {
    return (
    <footer className={s.footer}>
        <div className={cn(s.column, s.logo) }>
            <Link to='/' className={s.logo}><Logo /></Link>
                <p>© «Интернет-магазин»</p>
        </div>
        <div className={s.links}>
            <div className={s.column}>
                <Link to='/catalog'><p>Каталог</p></Link>
                <Link to='/develop'><p>Акции</p></Link>
                <Link to='/develop'><p>Новости</p></Link>
                <Link to='/develop'><p>Отзывы</p></Link>
            </div>
            <div className={s.column}>
                <Link to='/develop'><p>Оплата и доставка</p></Link>
                <Link to='/develop'><p>Часто спрашивают</p></Link>
                <Link to='/develop'><p>Обратная связь</p></Link>
                <Link to='/develop'><p>Контакты</p></Link>
            </div>
        </div>
        <div className={cn(s.column, s.contacts) }>
            <p>Мы на связи</p>
            <p>8 (999) 00-00-00</p>
            <p>shop.ru@gmail.com</p>
            <div className={s.socials}>
                <img src={telegram} alt="telegram" className={s.social__link}/>
                <img src={instagram} alt="instagram" className={s.social__link}/>
                <img src={viber} alt="viber" className={s.social__link}/>
                <img src={whatsapp} alt="whatsapp" className={s.social__link}/>
                <img src={vk} alt="vk" className={s.social__link}/>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
