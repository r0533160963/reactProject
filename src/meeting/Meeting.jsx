
import {Typography,Grid,Button,CardMedia,CardContent,CardActions,Card} from '@mui/material';
import {observer} from 'mobx-react'
import { useEffect } from "react";
import {getMeeting} from '../data/Srerver'
import DataStore from '../data/DataStore'
import getService from '../data/DataStore'
//import '../../App.css'

const Meeting= observer(() => {

  useEffect(() => {
    getMeeting();
  }, []);

  const getMeetingColor = (dateTime) =>
  {
     const today = new Date();
     const meetingDate = new Date(dateTime);
     const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
     const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if(  diffDays<0) 
     return non 
 else
     if (diffDays===1) {
       return 'red'; 
     } else if (diffDays <= 7) {
       return 'orange'; 
     } 
     else if (diffDays >=7) 
     {
       return 'green';
     }
  
   };

  return(
    <>
    <h1>Meeting</h1>
<Grid container >
  
      {DataStore.meeting.map((Meeting,index) => (
        <Grid item xs={4} key={index} id="cardId">
          <Card sx={{ maxWidth: 800, margin:5 }} >
            <CardMedia
              image={'https://plus.unsplash.com/premium_photo-1661342406765-43d30862060b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fExhd3llcnxlbnwwfHwwfHx8MA%3D%3D'}
              title={Meeting.name}
              component='img'
            />
            <CardContent align='left'>
              <Typography gutterBottom variant="h5" component="div" color="#7d1212">
              {Meeting.type}
              </Typography>
              <Typography variant="body1" color="text.secondary">
              name: {Meeting.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
               phone: {Meeting.phone}
              </Typography>
              <Typography variant="body1" color="text.secondary">
               email: {Meeting.email}
              </Typography>
              <Typography variant="body1" color="text.secondary" className={getMeetingColor(Meeting.dateTime)}>
              date:  {Meeting.dateTime}
              </Typography>
            </CardContent>
            <CardActions> 
            </CardActions>

          </Card> 
  </Grid>
     ))}
</Grid>
</>
);
})
export default  Meeting
