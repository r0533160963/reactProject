import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'
import EditBusinessDeta from '../businessDeta/EditBusinessDeta';
import {observer} from 'mobx-react'
import DataStore from '../../data/DataStore';
import {getBusiness} from '../../data/Srerver'

const BusinesDeta = observer(() => {


  React.useEffect(() => {
    getBusiness();
}, []);


  const [open, setOpen] = React.useState(false);

 


  const navigate = useNavigate()
  return (
   
    <Card sx={{ minWidth: 300 }} id="card">
      <CardContent >

        <Typography variant="h5" component="div" color="#5d4037">
          Law Firm
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="black">
          {DataStore.businessData.name}
          <br />
          <br />
          {DataStore.businessData.address}
          <br />
          {DataStore.businessData.phone}
          <br />
          {DataStore.businessData.email}
        </Typography>
      </CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
      {DataStore.businessData.description}
        <br />
      </Typography>
      <CardActions>
        <br/>
        <br/>

        {
          DataStore.isLogin ?
            <Fab color="brown" size="small" aria-label="edit" onClick={() => setOpen(true)}>
              <EditIcon />
            </Fab> :
            <></>
        }

      </CardActions>
      <EditBusinessDeta open={open} setOpen={setOpen} />
    </Card>
   
  );
})

export default BusinesDeta

