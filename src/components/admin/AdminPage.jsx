import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BusinesDeta from '../businessDeta/BusinessDeta';
import '../../App.css'




export default function AdminPage() {

  const navigate = useNavigate()
  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" id="AppBar">
          <Toolbar>
         
              <MenuIcon sx={{marginRight:2}} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              lawyer
            </Typography>

            <Button color="inherit" onClick={() => { navigate('/Login') }} >Login</Button>
          </Toolbar>
        </AppBar>
        <br />
        <br />
        <br />
        <div id="flex">

          <img id="imgUser" src="https://plus.unsplash.com/premium_photo-1661769577787-9811af17f98d?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div id="hi">
            <h1>Hi</h1>
            <h2>Welcome to the appointment of the

              largest law firm in Israel.</h2>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Button variant="contained" size="large" onClick={() => { navigate('/service') }} id="button"  >Our services</Button>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />

        <BusinesDeta />
      </Box>
    </>


  );
}
