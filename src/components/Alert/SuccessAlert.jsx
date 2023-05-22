import * as React from 'react';
import { useContext } from "react";
import { UserContext } from "../../context/appContext";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
  const Context = useContext(UserContext);

  // const handleClick = (loggedIn) => {
  //   loggedIn && setOpen(true);
  // };

  React.useEffect(() => {
    if (Context.loggedIn === true) {
      setOpen(true);
    }
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
      
      <Stack spacing={0} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          <AlertTitle>Вы успешно авторизованы</AlertTitle>
          как <strong>{Context.currentUser.name?.firstname} {Context.currentUser.name?.lastname}</strong>
        </Alert>
      </Snackbar>
    </Stack>
  );
}

