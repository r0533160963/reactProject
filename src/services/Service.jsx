import DataStore from "../data/DataStore"
import {Typography,Grid,Button,CardMedia,CardContent,CardActions,Card} from '@mui/material';
import {observer} from 'mobx-react'
import { useEffect } from "react";
import { getServicesServer } from "../data/Srerver";
import {useNavigate} from 'react-router-dom'
import AddMeeting from "../meeting/AddMeeting";


const Services = (observer(() => {

  useEffect(() => {
    getServicesServer();
  }, []);

  const navigate=useNavigate()
  

return ( 
<>
<h1>our services</h1>
<Grid container>
  
      {DataStore.services.map((service, index) => (
        <Grid item xs={4} key={index} id="cardId">
          <Card sx={{ maxWidth: 800, margin:5 }} >
            <CardMedia
              image={service.logo}
              title={service.name}
              component='img'
            />
            <CardContent align='right'>
            <Typography variant="subtitle1" component="div" align='left'>
             ${service.price}
            </Typography>
              <Typography gutterBottom variant="h4" component="div">
                {service.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
            <CardActions> 
            <AddMeeting/>
            </CardActions>
            

          </Card> 
  </Grid>
     ))}
</Grid>
</>
)
}))  
  export default Services