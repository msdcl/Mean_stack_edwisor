//let temp= window.prompt(`Enter 1 to get episode details using season and episode number \n Enter 2 to get episode using episode ids \n Enter 3 to search episode by name`);

let getEpisodeDetail=(seasonNum,episodeNum)=>{


	$.getJSON('https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json', function(data) {
              

           let reqData = data._embedded.episodes;
           let found =false;
           for(obj of reqData){  // iterate through json data
             if(obj.season==seasonNum && obj.number==episodeNum){   // search for season number and episode number
             	found=true;
                let result=`Details for season ${seasonNum} and episode ${episodeNum} :<br><br>`;
             	let table = '<table>';
             	for (i in obj) {  // iterate through json object of bing bang theory and store it in a tabular format
             		     var key = i;
             		     var value=obj[i];

             		     if(typeof(value)==`object`){
             		     	value = JSON.stringify(value);    // convert json object to string
             		     	  }
             		     
                       table+=`<tr><td>${key}</td><td>${value}</td></tr>`;
                    }
                    table  += '</table>';
                  let hide = document.getElementById(`container`);
                  hide.style.display='none';                           // hide contents wrt to id container in html page
                  document.getElementById(`heading`).innerHTML=result;
                  document.getElementById(`result`).innerHTML=table;
             }
           }
           if(found==false){
           let hide = document.getElementById(`container`);
                  hide.style.display='none';
                  document.getElementById(`result`).innerHTML=`There is no record  exists for season ${seasonNum} and episode ${episodeNum}`;
           }
         });
}


let searchForEpisode =(episodeName)=>{
	$.getJSON('https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json', function(data) {
           let reqData = data._embedded.episodes;
           let found =false;
           for(obj of reqData){
             if((obj.name).toLowerCase()==episodeName ){
             	found=true;
                let result=`Episode ${episodeName} found :<br><br>`;
             	let table = '<table>';
             	for (i in obj) {  // iterate through json object of bing bang theory
             		     var key = i;
             		     var value=obj[i];

             		     if(typeof(value)==`object`){
             		     	 value = JSON.stringify(value);    // convert json object to string
             		     	}
             		    table+=`<tr><td>${key}</td><td>${value}</td></tr>`;
                  
                    }
                    table  += '</table>';
                  let hide = document.getElementById(`container`);
                  hide.style.display='none';
                   document.getElementById(`heading`).innerHTML=result;
                  document.getElementById(`result`).innerHTML=table;
             }
           }
           if(found==false){
           let hide = document.getElementById(`container`);
                  hide.style.display='none';
                  document.getElementById(`result`).innerHTML=`There is no such episode name exists`;
           }
         });
}


let getEpisodeDetailUsingId = (idArr)=>{
   $.getJSON('https://s3-ap-southeast-1.amazonaws.com/edwisor-india-bucket/assignments/web03/JSS1l2/bigbangtheory.json', function(data) {
           let reqData = data._embedded.episodes;
            let resArr=[];            // push all details according to id into this array 
          let result=`Details of episodes according to ids : <br><br>`;
           for(id of idArr){
           	 let found =false;
            for(obj of reqData){
             if(Number(obj.id)==Number(id) ){
             	found=true;

             	let table = '<table>';      // contain all details into a table
             	for (i in obj) {  // iterate through json object of bing bang theory
             		     var key = i;
             		     var value=obj[i];

             		     if(typeof(value)==`object`){
             		     	value = JSON.stringify(value);    // convert json object to string
             			}
             			if(key==`id`){
             				key=`<b>${key}</b>`;
             				value=`<b>${value}</b>`;
             			}
             		  table+=`<tr><td>${key}</td><td>${value}</td></tr>`;
                  
                    }
                    table  += '</table><br><br>';
                
                 resArr.push(table);
             }
           }
           if(found==false){
          
            resArr.push(`<br>There is no record exists for <b>id ${id}</b><br><br>`);
           
           }
          }
            let hide = document.getElementById(`container`);
             hide.style.display='none';
             document.getElementById(`heading`).innerHTML=result;
           document.getElementById(`result`).innerHTML=resArr;
         });
}

 let takeInput = ()=>{
 	let input= document.getElementById(`input`).value;
 	switch(Number(input)){
	case 1:
     let seasonNum = window.prompt(`Enter season number`);

    if(seasonNum==undefined || seasonNum==null || seasonNum==``){
     	alert(`Please enter valid season number`);
     }else{
     let episodeNum = window.prompt(`Enter episode number`);
    
     if(episodeNum==undefined || episodeNum==null || episodeNum==``){
     	alert(`Please enter valid episode number`);
       }else{
           getEpisodeDetail(seasonNum, episodeNum);
       }
     }
	 break;
	case 2: 
	    let episodeIds = window.prompt(`Enter episode ids to get their details`);
	     if(episodeIds==undefined || episodeIds==null || episodeIds==``){
	     	alert(`Please enter valid input`);
	     }else{
	    let idArr = episodeIds.split(",");
	    getEpisodeDetailUsingId(idArr);
	   }
	  break;
	case 3:
	    let episodeName = window.prompt(`Enter episode name`);
         if(episodeName==undefined || episodeName==null || episodeName==``){
     	       alert(`Please enter valid episode name`);
           }else{
           	episodeName=episodeName.toLowerCase();
               searchForEpisode(episodeName);
           }
	   break;
	default:
	   alert(`Please enter valid input`);      
  }
}

