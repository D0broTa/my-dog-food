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

export default function ResetAlert() {
  const {openResetAlert, setOpenResetAlert} = useContext(UserContext)
  const Context = useContext(UserContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        setOpenResetAlert(false);
      return;
    }
    setOpenResetAlert(false);
  };

  

  return (
    <Stack spacing={0} sx={{ width: '100%' }}>
       <Snackbar open={openResetAlert} autoHideDuration={8000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
           <AlertTitle>Данные для восстановления учетной записи
            <br />условно отправлены на адрес электронной почты</AlertTitle>
           <strong>{Context.resetEmail.email}</strong>
           <AlertTitle>Выполните авторизацию, используя пользователя из базы данных</AlertTitle>
         </Alert>
       </Snackbar>
    </Stack>
  );
}
