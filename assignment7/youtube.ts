class YouTube{


    // fields and properties
    private videoTitile:string;
    private views:number;
    private channelName:string;
    private countSubsribers:number;
    private videoDescription:string;
    private likes:number;
    private dislikes:number;
    private countComments:number;
    private recommendedVideos:string[];


    //constructor that is used to initialize properties
    constructor(title:string,views:number,name:string,countSubscriber:number,description:string,likes:number,dislikes:number,comments:number,recommendations?:string[]){
      this.videoTitile =title;
      this.views= views;
      this.channelName=name;
      this.countSubsribers = countSubscriber;
      this.videoDescription = description;
      this.likes = likes;
      this.dislikes=dislikes;
      this.countComments=comments;
      this.recommendedVideos = recommendations;
    }//end constructor

    //  method which are accessible to outside world or getter and setter
        getVideoTitle= ()=>{
           return this.videoTitile;
        }

        setVideoTitle =(title:string)=>{
            this.videoTitile = title;
        }

        getNumberOfViews= ()=>{
            return this.views;
        }

         setNumberOfViews= (num:number)=>{
             this.views = num;
         }

         getChannelName= ()=>{
             return this.channelName;
         }

         setChannelName= (name:string)=>{
             this.channelName = name;
         }

         getNumberOfSubscribers = ()=>{
             return this.countSubsribers;
         }

         setNumberOfSubscribers= (num:number)=>{
             this.countSubsribers = num;
         }

         getVideoDescription=()=>{
             return this.videoDescription;
         }

         setVideoDescription = (description:string)=>{
             this.videoDescription = description;
         }

         getNumberOfLikes= ()=>{
             return this.likes;

         }

         setNumberOfLikes =(num:number)=>{
             this.likes = num;
         }

         getNumberOfDislikes= ()=>{
             return this.dislikes;
         }
         setNumberOfDislikes = (num:number)=>{
            this.dislikes = num;
         }

         getNumberOfComments = ()=>{
             return this.countComments;
         }

         setNumberOfComments = (num:number)=>{
             this.countComments = num;
         }
         getRelatedVideos = ()=>{
             return this.recommendedVideos;
         }

         setRelatedVideos = (...videos:string[])=>{
             console.log("Enter this list of related videos to string array of recommended videos.")
         }

}//end class

// object of the class
let video1 = new YouTube("kumar Sanu hit song",15000,"90's hit songs",13000,"publish on 25th june 2012",5000,300,500);

let noOfViews = video1.getNumberOfViews();

console.log("Number of view to this video are "+noOfViews);

let videoTitle = video1.getVideoTitle();

console.log("Video title :  "+videoTitle);


console.log("Now we will change the video title");

video1.setVideoTitle("Kumar sanu best song");

let newVideoTitle = video1.getVideoTitle();

 console.log("Updated video title : "+newVideoTitle);