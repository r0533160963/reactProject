import { useState } from "react"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { changeEditBusinessDeta } from '../../data/Srerver';
import {observer} from 'mobx-react'



const EditBusinessDeta=(observer(({ open, setOpen })=> {

  const [newBussnesData, setNewBussnesData] = useState('')
  

  function onChange(e) {
    setNewBussnesData({
      ...newBussnesData,
           [e.target.id]: e.target.value
       });
   }

  const  handelEdit = async(event) => {
 event.preventDefault();
 const res=await changeEditBusinessDeta(newBussnesData)
 .then(() => {
       handleClose();
     })
    }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
 
     <React.Fragment> 
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <form onSubmit={handelEdit}>
            <DialogTitle>Change data</DialogTitle>
            <DialogContent>
            <br />
   
            <TextField id="name" name="name" label="name " variant="outlined" type="text" value={newBussnesData.name} onChange={(e) => { onChange(e) }} />   
            <TextField id="phone" name="phone" label="phone" variant="outlined" type="phone" value={newBussnesData.email} onChange={(e) => { onChange(e) }} />   
            <TextField id="address" name="address" label="Address" variant="outlined" type="text" value={newBussnesData.address} onChange={(e) => { onChange(e) }} />    
            <TextField id="description" name="description" label="freeText" variant="outlined" type="text" value={newBussnesData.description} onChange={(e) => { onChange(e) }} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" >save change</Button>
            </DialogActions>
          </form>
        </Dialog>
  </React.Fragment>
    </>
)
}));

export default EditBusinessDeta