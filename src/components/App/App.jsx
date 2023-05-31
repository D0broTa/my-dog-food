import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, /* useContext */} from "react";
// import { signin, signup, checkToken } from "../../utils/auth";
import api from '../../utils/api'
import s from './style.module.css'
import { /* setItem, */ getItem, deleteItem } from "../../utils/localStorage";
import { UserContext } from "../../context/appContext";

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../Pages/HomePage";
import CatalogPage from "../../Pages/CatalogPage";
import ProductPage from "../../Pages/ProductPage";
import RulesPage from "../../Pages/RulesPage";
import FAQ from "../../Pages/FAQ"
import DevelopPage from "../../Pages/DevelopPage";
import NotFound from "../../Pages/NotFound"

import RegistrationForm from "../Forms/RegistrationForm";
import LoginForm from "../Forms/LoginForm";
import ResetForm from "../Forms/ResetForm";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";





function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openRegistrationAlert, setOpenRegistrationAlert] = useState(false);
  const [openResetAlert, setOpenResetAlert] = useState(false);
  const [newUser, setNewUser] = useState({})
  const [resetEmail, setResetEmail] = useState(null)
  // const [currentUser, setCurrentUser] = useState({
  //   id: null,
  //   email: null,
  //   name: {
  //       firstname: null,
  //       lastname: null,
  //       },
  //   password: null,
  //   username: null,
  // });
  
  const navigate = useNavigate();
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const mainUrl = location.state?.mainUrl;

  // const Context = useContext(UserContext);

  const logout = () => {            //выход из приложения
    deleteItem("JWT");
    setLoggedIn(false);
    console.log('вы вышли')
    navigate('/')
  }

  const handleTokenCheck = () => {                      //проверяем наличие токена
    if (getItem('JWT') !== null) {
      setLoggedIn(true)
      console.log(`сейчас в локал сторадже JWT ${getItem('JWT')}. Вы авторизованы`);
    } else {
      console.log(`сейчас в локал сторадже JWT ${getItem('JWT')}. Авторизуйтесь`);
    }
  }

  useEffect(() => {
    handleTokenCheck()                                  //проверка токена при перерендере
    }, [location.pathname])
    
  useEffect(() => {                                     //грузим таблицу с пользователями
    api.getAllUsers().then((data) => setUsers(data))
    
    
  }, [])

  useEffect(() => {                                     //записываем в контекст currentUser
    if (loggedIn === true) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentUser.username) {
          setCurrentUser(users[i]);
        }
      }
    }
  }, [loggedIn, currentUser, users])

  useEffect(()=> {                                        // грузим все продукты
    api.getAllProducts().then((data) => setProducts(data))
  }, [])

  return (
  <UserContext.Provider value={
    { currentUser, setCurrentUser,
      products, setProducts,
      openErrorAlert, setOpenErrorAlert,
      openSuccessAlert, setOpenSuccessAlert,
      openRegistrationAlert, setOpenRegistrationAlert,
      openResetAlert, setOpenResetAlert,
      loggedIn, setLoggedIn,
      newUser, setNewUser,
      resetEmail, setResetEmail,
    }
    }>
    <div className={s.mainContainer}>
      <Header logout={logout} />
      <div className={s.container}>
        {<Alert /* className={s.alert} *//> }
        <Routes location={backgroundLocation ? {...backgroundLocation, pathname: mainUrl} : location}>
            <Route path="/" element={<HomePage users={users} title={`Первый проект`}/>} />
            <Route path="/catalog" element={<CatalogPage title={`Каталог проекта`}/>} />
            <Route path="/product_id" element={<ProductPage title={`Страница продукта`}/>} />
            <Route path="/rules" element={<RulesPage title={`Пользовательсткое соглашение`}/>} />
            <Route path="/FAQ" element={<FAQ title={`Вопросы и ответы`}/>} />
            <Route path="/login" element={<LoginForm users={users} title={`Авторизация`}/>} />
            <Route path="/registration" element={<RegistrationForm title={`Регистрация`}/>} />
            <Route path="/reset" element={<ResetForm title={`Восстановление пароля`}/>} />
            <Route path="/develop" element={<DevelopPage title={`Страница в разработке`}/>} />
            <Route path="*" element={<NotFound title={`Проверьте URL адрес`}/>} />
          </Routes>
        {backgroundLocation && (<Routes>
          <Route path="/login" element={
            <Modal>
              <LoginForm ></LoginForm>
            </Modal>} />
          <Route path="/registration" element={
            <Modal>
              <RegistrationForm></RegistrationForm>
            </Modal>} />
          <Route path="/reset" element={
            <Modal>
              <ResetForm></ResetForm>
            </Modal>} />
        </Routes>)}
      </div>
      <Footer />
    </div>
  </UserContext.Provider>
    
  );
}

export default App;


  // const authUrls = ['/login', '/registration', '/reset'];
  // const isAuthLocation = authUrls.includes(location.pathname);

  // const handleRequestAuth = (data) => {     // регистрируемся или авторизуемся
  //   if (location.pathname === '/login') {
  //       signin(data)
  //         .then((data) => {
  //           if (!data.error) {               //если нет ошибки в отправляемых данных при авторизации
  //             setItem('JWT', data.token)      //то сохраняем полученный от серера токен в localStorage
  //             setLoggedIn(true);               //меняем стэйт на тру
  //             navigate('/catalog')            //и переходим на страницу каталога
  //           }
  //           return data;
  //         })
  //         /* .catch((err, data) => {
  //           openNofication('error', data);
  //         }); */
  //   }
  //   if (location.pathname === '/registration') {
  //     signup(data)
  //       .then((data) => {})
  //       /* .catch((err, data) => {
  //         openNofication('error', data);
  //       }); */
  //   }
  // }
  // console.log(loggedIn);
  // console.log(getItem('JWT'))