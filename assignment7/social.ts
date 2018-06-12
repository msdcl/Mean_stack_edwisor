class SocialProfile{

     //fields and properties
    private name:string;
    private gender:string;
    private interestedIn:string;
    private aboutYou:string;
    private education:string[];
    private currentCity:string;
    private homeTown:string;
    private workPlace:string[];
    private skills:string[];
    private dob:string;    //date of birth
    private birthYear:number;
    private contactNumber:number;
    private email:string;
    private relationshipStatus:string;
    private lifeEvents:string[];        //array of life events


    //constructor
    constructor(name:string,gender:string,dob:string,bithYear:number,email:string,interestedIn?:string,aboutYou?:string,currentCity?:string,homeTown?:string,contactNumber?:number,relationshipStatus?:string,education?:string[],workPlace?:string[],skills?:string[],lifeEvents?:string[]){

        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.birthYear = bithYear;
        this.email =email;
        this.interestedIn =interestedIn;
        this.aboutYou= aboutYou;
        this.currentCity = currentCity;
        this.homeTown =homeTown;
        this.contactNumber= contactNumber;
        this.relationshipStatus = relationshipStatus;
        this.education = education;
        this.workPlace = workPlace;
        this.skills = skills;
        this.lifeEvents = lifeEvents;

    }//end constructor

    //methods
      getName= ()=>{
          return this.name;
      }
      setName = (name:string)=>{
          this.name = name;
      }

      getGender=()=>{
          return this.gender;
      }
      setGender = (gender:string)=>{
           this.gender = gender;
      }

      getDOB = ()=>{
          return this.dob;
      }
      setDOB = (dob:string)=>{
          this.dob = dob;
      }

      getBirthYear = ()=>{
          return this.birthYear;
      }

      setBirthYear = (year:number)=>{
        this.birthYear = year;
      }

      getEmail = ()=>{
          return this.email;
      }
      setEmail = (email:string)=>{
          this.email = email;
      }

      getInterestedIn = ()=>{
          return this.interestedIn;
      }
      getAboutYou=()=>{
          return this.aboutYou;
      }

      setAboutYou = (about:string)=>{
          this.aboutYou = about;
      }

      getCurrentCity = ()=>{
          return this.currentCity;
      }
      setCurrentCity = (city:string)=>{
          this.currentCity= city;
      }

      getHomeTown = ()=>{
          return this.homeTown;
      }
      setHomeTown = (town:string)=>{
          this.homeTown = town;
      }

      getContactNumber = ()=>{
          return this.contactNumber;
      }
      setContactNumber = (num:number)=>{
          this.contactNumber = num;
      }
     getRelationshipStatus = ()=>{
         return this.relationshipStatus;
     }

     setrelationshipStatus = (status:string)=>{
         this.relationshipStatus =status;
     }

     getEducationDetails = ()=>{
         return this.education;
     }

     setEducationDetails = (education:string[])=>{
        console.log("Set education details according to college, school");
     }

     getWorkPlaces = ()=>{
         return this.workPlace;
     }
     setWorkPlace = (workPlace:string)=>{
        console.log("add this to already existing workplace list");
     }

     getSkills =()=>{
         return this.skills;
     }

     setSkills = (skills:string)=>{
        console.log("Add this skill to already existing skill set");
     }

     getLifeEvents =()=>{
         return this.lifeEvents;
     }

     setLifeEvents = (event:string)=>{
         console.log("Add this event to person's life event list");
     }

     getAgeOfPerson = ()=>{
         let current = new Date();
         let currYear = current.getFullYear();
         let birthYear =this.birthYear;
         return currYear - birthYear;
     }

}//end class



// class object

let myProfile = new SocialProfile("Mahendra Singh","Male",`11-08-1994`,1994,"abc@gmail.com","women","I am the best","Beawar, Rajasthan","Pali, Rajasthan",1234567890,"single",["kota","IIT Guwahati"],["Quietgrowth","Fretron LLP"],["C++","Java","javascript","html","css","php"],["entry 2012","graduated 2016"]);
   

let pName = myProfile.getName();

console.log(pName);

let bdayYear = myProfile.getBirthYear();

console.log(bdayYear);

let age = myProfile.getAgeOfPerson();

console.log("Age of person "+age);

let skillsSet = myProfile.getSkills();
console.log("Person's skills : ");
let i:any;
for(i in skillsSet){
   console.log(skillsSet[i]);
}

myProfile.setName("Chauhan Mahendra Singh");
let newName = myProfile.getName();
console.log("Updated name : "+newName);