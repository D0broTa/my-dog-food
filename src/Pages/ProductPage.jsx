import React from "react";
import api from '../utils/api';
import {useParams, useNavigate} from 'react-router-dom';
import ButtonMUI from '@mui/material/Button';
import FastRewindRoundedIcon from '@mui/icons-material/FastRewindRounded';
import Product from "../components/Product/Product";

function ProductPage() {
    const [product, setProduct] = React.useState(null)
    
    const {productId} = useParams();                             // объект { ключ(из роута в App после ":" : значение (то что выводим в Link в ElemCardList))}
    const navigate = useNavigate();
    React.useEffect(() => {
        api.getProduct(productId).then((data) => setProduct(data))      // делаем запрос по полученному значению объекта на сервер API, результат записываем с state
    }, [])
    // console.log(product)
    document.title = `${product?.title}`
    return (
        product &&
        <div>
            <ButtonMUI sx={{marginLeft: '50px',}} onClick={()=>navigate(-1)} variant="text" startIcon={<FastRewindRoundedIcon />}>
                Назад в каталог
            </ButtonMUI>
            <Product {...product}></Product>                         {/* // state прокидываем как props */}
        </div>
    )
}

export default ProductPage;