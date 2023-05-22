import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import { signin, signup, checkToken } from "../../utils/auth";
import api from '../../utils/api'
import s from './style.module.css'
import { setItem, getItem, deleteItem, clearLocalStorage } from "../../utils/localStorage";
import { UserContext } from "../../context/appContext";

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../Pages/HomePage";
import CatalogPage from "../Pages/CatalogPage";
import ProductPage from "../Pages/ProductPage";
import FAQ from "../Pages/FAQ"
import NotFound from "../Pages/NotFound"
import RegistrationForm from "../Forms/RegistrationForm";
import LoginForm from "../Forms/LoginForm";
import ResetForm from "../Forms/ResetForm";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";
import ErrorAlert from '../Alert/ErrorAlert'




function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
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

  const Context = useContext(UserContext);

  const logout = () => {            //выход из приложения
    deleteItem("JWT");
    setLoggedIn(false);
    // Context.loggedIn = false;
    console.log('вы вышли')
    navigate('/')
  }

  const handleTokenCheck = () => {                      //проверяем наличие токена
    if (getItem('JWT') !== null) {
      setLoggedIn(true)
      // Context.loggedIn = true;
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

  //  useEffect(() => {                                     //записываем пользователя в контекст
  //    if (Context.loggedIn === 'errorAuth') {
  //      console.log(`Сейчас статус из контектса ${Context.loggedIn}`)
  //   }
  //  }, [Context.loggedIn])
  
  
  
  useEffect(() => {                                     //записываем в контекст currentUser
    if (loggedIn === true) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentUser.username) {
        setCurrentUser(users[i]);
        }
      }
    }
  })

// const hi = () => clearLocalStorage();
// if (loggedIn) {console.log(`вывод в апе Контекста ${JSON.stringify(Context)}`)}
  return (
  <UserContext.Provider value={{ currentUser, setCurrentUser, openErrorAlert, setOpenErrorAlert, loggedIn, setLoggedIn}}>
    <div className={s.mainContainer}>
      <Header /* loggedIn={loggedIn} */  logout={logout} /* hi={hi} *//>
      <div className={s.container}>
        {<Alert className={s.alert}/> }
        <Routes location={backgroundLocation ? {...backgroundLocation, pathname: mainUrl} : location}>
            <Route path="/" element={<HomePage users={users} />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product_id" element={<ProductPage />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/login" element={<LoginForm users={users} />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/reset" element={<ResetForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        {backgroundLocation && (<Routes>
          <Route path="/login" element={
            <Modal>
              <ErrorAlert className={s.errorAuth}/>
              <LoginForm></LoginForm>
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