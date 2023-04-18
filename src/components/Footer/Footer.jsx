import Logo from "../Logo/Logo";
import s from './style.module.css';

import telegram from '../../images/Telegram.svg';
import instagram from '../../images/Instagram.svg';
import viber from '../../images/Viber.svg';
import whatsapp from '../../images/WhatsApp.svg';
import vk from '../../images/VK.svg';

function Footer() {
    return (<footer className={s.footer}>
        <div className={s.column}>
            <Logo />
            <p>© «Интернет-магазин DogFood.ru»</p>
        </div>
        <div className={s.column}>
            <p>Каталог</p>
            <p>Акции</p>
            <p>Новости</p>
            <p>Отзывы</p>
        </div>
        <div className={s.column}>
            <p>Оплата и доставка</p>
            <p>Часто спрашивают</p>
            <p>Обратная связь</p>
            <p>Контакты</p>
        </div>
        <div className={s.column}>
            <p>Мы на связи</p>
            <p>8 (999) 00-00-00</p>
            <p>dogfood.ru@gmail.com</p>
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
