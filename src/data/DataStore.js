import { makeObservable, observable, action } from "mobx";

class dataStore {
    services = [];
    meeting=[];          
 
    businessData = {
        // name: "Yair Itzkovits",
        // address: "Rothschild 60 Tel Aviv",
        // phone: "03-1234567",
        // owner: "Yariv Katz",
        // logo: "https://coding-academy.org/images/ca_logo.png",
        // description: "The largest law firm in Israel,Here you can get the best professionalism.",
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