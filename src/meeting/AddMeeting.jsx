import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {observer} from 'mobx-react'
import { addMeetingServer } from '../data/Srerver';



const AddMeeting= observer(() => {
  const [newMeeting, setNewMeeting] = React.useState({
    name:'',
    type:'',
    phone:null,
    email:'', 
    dateTime:null,
  })
 
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setNewMeeting({ ...newMeeting, [e.target.id]: e.target.value})
  }

  const onChangeTime=(e)=>{
    console.log(e);
    setNewMeeting({...newMeeting,'dateTime':e})
  }

  const handel = async () => {
 
    const res= await addMeetingServer(newMeeting)

  }
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        To Meeting
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            handel(formJson);  
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Meeting</DialogTitle>
        <DialogContent>
          <DialogContentText>
          
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="type"
            name="type"
            label="The type of service"
            type="type"
            fullWidth
            variant="standard"
            value={newMeeting.id} onChange={(e) => { onChange(e) }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="name"
            type="name"
            fullWidth
            variant="standard"
            value={newMeeting.id} onChange={(e) => { onChange(e) }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="phone"
            name="phone"
            label="phone"
            type="phone"
            fullWidth
            variant="standard"
            value={newMeeting.id} onChange={(e) => { onChange(e) }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={newMeeting.id} onChange={(e) => { onChange(e) }}
          />

<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
      
        <DateTimePicker
          label="select deta and time"
          value={newMeeting.detaTime}
          onChange={(e) => { onChangeTime(e) }
          
         }
        />
      </DemoContainer>
    </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">To Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
})
export default AddMeeting