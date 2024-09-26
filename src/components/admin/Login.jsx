import * as React from 'react';
import { useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { login } from '../../data/Srerver';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DataStore from '../../data/DataStore';
import {observer} from 'mobx-react-lite'
import '../../App.css'

const Login= observer(()=>{

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
}
)
export default function LoginFinal() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);

 


  const handleSubmit = async () => {
    const res = await login({ "name": name, "password": password })
    console.log(res)
    if (res == "success") {

      DataStore.setIsLogin(true);
      navigate("/adminHome")
    }
    else
      if (res == 'failed') {
        alert('error...')
      }
  }

  return (
    <div id="loginid">
    
    <CssVarsProvider >
      <div id="login"
      
      >
      <main >
        <Login />
        <Sheet id="logins"
          sx={{
            width: 300,
            // mx: 'auto', // margin left & right
            my:6, // margin top & bottom
            py: 3, // padding top & bottom
            px: 10, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            borderRadius: 'sm',
            boxShadow: 'md',
            
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>


          <FormControl >
            <FormLabel>Name</FormLabel>
            <Input
              // html input attribute
              name="name"
              type="name"
              placeholder="name"
              maxLength={5}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              maxLength={6}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }} className="button-login" onClick={handleSubmit}>Log in</Button>
          
        </Sheet>
      </main>
      </div>
    </CssVarsProvider>
    </div>
  );
}
