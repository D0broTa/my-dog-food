import * as React from 'react';
import { UserContext } from "../../context/appContext";

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ErrorAlert() {

  const {openErrorAlert, setOpenErrorAlert} = React.useContext(UserContext)
  
  const Context = React.useContext(UserContext)

  const handleClose = (event, reason) => {

    if (reason === 'clickaway') {
      Context.loggedIn = null;
      setOpenErrorAlert(false);
      return;
    }
    Context.loggedIn = null
    setOpenErrorAlert(false);
  };

  return (
    
      
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openErrorAlert} autoHideDuration={6000} onClose={handleClose}>
        {<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          <AlertTitle>Вы не авторизованы</AlertTitle>
          Некорректная комбинация <strong>Username/Password</strong>. Повторите ввод!
        </Alert>}
      </Snackbar>
    </Stack>
    
    
    
  );
}
