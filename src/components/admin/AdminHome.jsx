import * as React from 'react';
import { observer } from 'mobx-react'
import BusinesDeta from '../businessDeta/BusinessDeta';
import DataStore from '../../data/DataStore';
import AddSrvice from '../../services/AddSrvice'
import Service from '../../services/Service';
import {useNavigate  } from 'react-router-dom'
import Button from '@mui/material/Button';

const AdminHome = observer(() => {
  
  React.useEffect(() => {
    DataStore.setIsLogin(true)
  })
 

  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate()


  return (
    <>
    <h1>My own business</h1>
    <br/>
      <BusinesDeta />
      <br/>
      <br />
      <hr/>
      <br/>
      <br/>
      <AddSrvice open={open} setOpen={setOpen} />
      <br/>
      <br/>
      <br/>
      <Button variant="outlined" onClick={()=>{navigate('/meeting')}} id="button">Meeting</Button>
      <Service/>
    </>
  );
}
)

export default AdminHome
