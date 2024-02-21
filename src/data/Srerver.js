import axios from 'axios';
import dataStore from './DataStore';

export async function getServicesServer() {
    const response = await axios.get('http://localhost:8787/services');
    const services = response.data;
    dataStore.setServices(services);
}


export const addServiceServer=async(servise)=>{
    try{
const response=await fetch('http://localhost:8787/service',{
  method:'post',
  body:JSON.stringify(servise),
  headers:{
    "Content-Type":"application/json"
  }
})
if(response.status===200){
    dataStore.addService(servise);
console.log("good")

}
else{
console.log("no");
}
    }
    catch(error){
console.log(error,"error")
    }
  }


export async function login(service) {
    try {
        const res = await axios.post('http://localhost:8787/login', service);
        if (res.status === 200) {
            return 'success';
        }
    }
    catch {
        return 'failed';
    }
}


export async function changeEditBusinessDeta(change){
    console.log("change",change)
    const response=await axios.post('http://localhost:8787/businessData', change)
    
    dataStore.setBusinessData(response.data)
            

   
}
export async function getBusiness() {
    const services = await axios.get('http://localhost:8787/businessData');
    
        dataStore.setBusinessData(services.data);

}

export const addMeetingServer=async(meeting)=>{
    try{
const response=await fetch('http://localhost:8787/appointment',{
  method:'post',
  body:JSON.stringify(meeting),
  headers:{
    "Content-Type":"application/json"
  }
})
if(response.status===200){
    dataStore.addMeeting(meeting);
console.log("good")

}
else{
console.log("no");
}
    }
    catch(error){
console.log(error,"error")
    }
  }


  export async function getMeeting() {
    const response = await axios.get('http://localhost:8787/appointments');
    const meeting = response.data;
    dataStore.setMeeting(meeting);
}
