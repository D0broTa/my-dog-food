import React from "react";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Divider from '@mui/material/Divider';

import s from './style.module.css';

const Product = ({...product}) => {
    const [quantity, setQuantity] = React.useState(0);
    const [color, setColor] = React.useState('disabled')

    const handleLike = () => {                                  // изменение цвета лайка по клику
        if (color === "disabled") {
            setColor('error');
        } else {
            setColor('disabled');
        }
    }

    return (
        product &&
        <>
        <div className={s.container}>
{/* Левый контейнер */}
            <div className={s.left_container}>
                <div className={s.title}>{product.title}</div>
                <div className={s.info}>
                    <div className={s.category}>Категория: {product.category}</div>
                    <div className={s.info_rigth}>
                        <div className={s.rewiew}>Количество отзывов: {product.rating?.count}</div>
                        <Divider orientation="vertical" flexItem ></Divider>
                        <div className={s.rating}>
                            <Rating name="read-only"  value={product.rating?.rate} precision={0.1} readOnly />
                            ({product.rating?.rate})
                        </div>
                    </div>
                </div>
                <img className={s.image} src={product.image} alt={product.description} />
            </div>
{/* Центральный контейнер */}
            <div className={s.center_container}>
                <img className={s.carousel_image} src={product.image} alt={product.description} />
                <img className={s.carousel_image} src={product.image} alt={product.description} />
                <img className={s.carousel_image} src={product.image} alt={product.description} />
            </div>
{/* Правый контейнер */}
            <div className={s.right_container}>
                
                <div className={s.title}>{product.price} $</div>
                
                <div className={s.count_quantity_and_add_cart}>
                    <div className={s.count_quantity}>
                        <IconButton size='small'   onClick={() => setQuantity(quantity + 1)}><AddIcon /></IconButton>
                        {quantity}
                        <IconButton size='small'  onClick={() => quantity > 0 && setQuantity(quantity - 1)} ><RemoveIcon /></IconButton>
                    </div>
                    <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                        В корзину
                    </Button>
                </div>
                
                <div className={s.favourite}>
                    <IconButton aria-label="add to favorites" color={color} onClick={handleLike}>
                        <FavoriteIcon />
                    </IconButton>
                    В избранное
                </div>
                
                <div className={s.delivery}>
                    <LocalShippingIcon sx={{width: '70px', height: '70px',  margin: '0 10px 0 10px'}} />
                    <div className={s.right}>
                        <h3 className={s.name}>Доставка по всему Миру!</h3>
                        <p className={s.text}>
                            Доставка курьером — <span className={s.bold}> от 399 ₽</span>
                        </p>
                        <p className={s.text}>
                            Доставка в пункт выдачи — <span className={s.bold}> от 199 ₽</span>
                        </p>
                    </div>
                </div>

                <div className={s.delivery}>
                    <WorkspacePremiumIcon sx={{width: '70px', height: '70px',  margin: '0 10px 0 10px'}}/>
                    <div className={s.right}>
                        <h3 className={s.name}>Гарантия качества</h3>
                        <p className={s.text}>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
                    </div>
                </div>
                    
                {/* </div> */}
            </div>
        </div>
{/* Нижний контейнер */}
        <div className={s.bottom_container}>
            <div className={s.description}>
                <div className={s.title}>Описание</div>
                <div className={s.text}>{product.description}</div>
            </div>
        </div>
        
        </>
    )
}

export default Product;