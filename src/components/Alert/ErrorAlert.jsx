import * as React from 'react';
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
  // const [openErrorAlert, setOpenErrorAlert] = React.useState(false);

  const {openErrorAlert, setOpenErrorAlert} = React.useContext(UserContext)
  
  const Context = React.useContext(UserContext)

  // if (Context.loggedIn === 'errorAuth') {
  //   setOpen(true)
  // }

  // const handleClick = () => {
  //   setOpenErrorAlert(true);
  //   console.log(Context)
  // };

  React.useEffect(() => {
    if (Context.openErrorAlert === 'errorAuth') {
      // setOpenErrorAlert(true);
      console.log(Context)
    }
  }, [])

  const handleClose = (event, reason) => {

    if (reason === 'clickaway') {
      Context.loggedIn = null;
      console.log(Context)
      return;
    }
    Context.loggedIn = null
    console.log(Context)
    setOpenErrorAlert(false);
  };

  return (
    
      
      <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={openErrorAlert} autoHideDuration={6000} onClose={handleClose}>
        {<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          <AlertTitle>Вы не авторизованы</AlertTitle>
          Некорректная комбинация <strong>Username/Password</strong>. Повторите ввод!
        </Alert>}
      </Snackbar>
    </Stack>
    
    
    
  );
}




// import * as React from 'react';
// import {useState} from 'react'
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';


// export default function ErrorAlert() {
  
//   return (
//     <Stack sx={{ width: '300px' }} spacing={2}>
//       <Alert onClose={() => {}} color={'error'}>
//         <AlertTitle>Вы не авторизованы</AlertTitle>
//         <strong>Пройдите авторизацию для продолжения работы</strong>
        
//       </Alert>
//     </Stack>
//   );
// }


