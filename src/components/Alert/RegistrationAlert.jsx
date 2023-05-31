import * as React from 'react';
import { useContext } from "react";
import { UserContext } from "../../context/appContext";

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RegistrationAlert() {
  const {openRegistrationAlert, setOpenRegistrationAlert, setNewUser} = useContext(UserContext)
  const Context = useContext(UserContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        setOpenRegistrationAlert(false);
        setNewUser({});
      return;
    }
    setOpenRegistrationAlert(false);
    setNewUser({});
  };

  

  return (
    <Stack spacing={0} sx={{ width: '100%' }}>
       <Snackbar open={openRegistrationAlert} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
           <AlertTitle>Условная регистрация прошла успешно</AlertTitle>
           <div>Username: <strong>{Context.newUser.username}</strong></div>
           <div>Password: <strong>{Context.newUser.password}</strong></div>
           <AlertTitle>Выполните авторизацию, используя пользователя из базы данных</AlertTitle>
         </Alert>
       </Snackbar>
    </Stack>
  );
}
