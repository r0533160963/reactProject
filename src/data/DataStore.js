import { makeObservable, observable, action } from "mobx";

class dataStore {
    services = [];
    meeting=[];          
 
    businessData = {
    }


    isLogin=false
    service=[]

    constructor() {
        makeObservable(this, {
            isLogin:observable,
           setIsLogin:action,
            businessData: observable,
            services: observable,
            meeting:observable,
            setBusinessData: action,
            setServices: action,
            addService: action,
            addMeeting:action,
            setMeeting:action,
        })
    }
    setIsLogin=(temp)=>{
        this.isLogin=temp
    }

    setServices = (services) => {
        this.services = [...this.services, ...services];
    }


    addService = (service) => {
        this.services = [...this.services, service];
    }
    


     getBusinessData(data){
      
           this.businessData={...data};
 
     }

    getBusinessData=(data)=>{
        if (data!==undefined)
        this.businessData
    }



    setBusinessData(data) {
        this.businessData = data;

    }

    addMeeting = (meeting) => {
        this.meeting = [...this.meeting, meeting];
    }

    setMeeting = (meeting) => {
        this.meeting = meeting;
    }
}

export default new dataStore();