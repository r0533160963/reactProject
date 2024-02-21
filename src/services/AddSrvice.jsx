import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {observer} from 'mobx-react'
import DataStore from '../data/DataStore';
import { addServiceServer } from '../data/Srerver';

const AddSrvice = observer(() => {
  const [newService, setNewService] = React.useState({
    id:null,
    name:'',
    description:'',
    price:null,
    duration:'',
    logo:'https://plus.unsplash.com/premium_photo-1661329930662-19a43503782f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fExhd3llcnxlbnwwfHwwfHx8MA%3D%3D'
   })
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setNewService({ ...newService, [e.target.id]: e.target.value})

  }

  const handel = async () => {
 
    const res= await addServiceServer(newService)

  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} id="button" >
        Add Service
      </Button>
      <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit:(event) => {
                 event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries((formData).entries());
                handel(formJson);  
              handleClose();        
            },
          }}
        >        
     
      

        <DialogTitle>Add Services</DialogTitle>
        <DialogContent  >
        <TextField id="id" label="id" type="number" variant="standard" value={newService.id} onChange={(e) => { onChange(e) }}  />
        <br/>
        <TextField id="name" label="name" variant="standard"  sx={{width: 500,maxWidth: '100%', }}   value={newService.name} onChange={(e) => { onChange(e) }} />
        <br/>
        <TextField id="description" label="description" variant="standard"  sx={{width: 500,maxWidth: '100%', }}  value={newService.description}  onChange={(e) => { onChange(e) }} />
        <br/>
        <TextField id="price" label="price" type="number"  variant="standard"  value={newService.price} onChange={(e) => { onChange(e) }} />
        <br/>
        <TextField id="duration" label="duration" variant="standard"   value={newService.duration} onChange={(e) => { onChange(e) }}  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">To Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
})
export default AddSrvice