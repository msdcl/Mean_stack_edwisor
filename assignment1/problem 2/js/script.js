 
  var temp = window.prompt("Enter 1 to get pokemon detail\n Enter 2 to get pokemon name according to name in next-evolution\n Enter 3 to get pokemon according to their weakness");
  var found= false;

var getPokemonDetail= function(pokemonName){     // get pokemon related details
      if(pokemonName==undefined||pokemonName==null||pokemonName==''){
   	            alert("Invalid pokemon name");
       }else{

       	// get raw json data set
   	   $.getJSON('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json', function(data) { 
   	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
             for(x in data.pokemon){
                  if((data.pokemon[x].name).toLowerCase()==pokemonName){
                  	found=true;
                  	var jsonObj= data.pokemon[x];
                  	 var result=pokemonName+" pokemon related detail :"+"<br>";
                  	for (i in jsonObj) {    // iterate through json object of pokemon
             		     var key = i;
             		     var value=jsonObj[i];

             		     if(typeof(value)=="object"){
             		     	var jsonStr = JSON.stringify(value);    // convert json object to string
             		     	
                           result =result +" "+key+" : "+jsonStr+ "<br>";
             		     }else{
             			 result =result +" "+key+" : "+value+ "<br>";      // combine full detail in a string
             			}
             		
                  
                    }
                  //	var jsonStr = JSON.stringify(data.pokemon[x]);
                  	document.getElementById("Answer").innerHTML=result;         // write on html page
                  }

             }
             if(found==false){
                 document.getElementById("Answer").innerHTML = "There is no such pokemon exist"; 
               }

          });
       }
    } 

    var getPokemonName = function(pokemonName){
    	   if(pokemonName==undefined||pokemonName==null||pokemonName==''){
   	            alert("Invalid pokemon name");
       }else{

       	// get raw json data set 
   	   $.getJSON('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json', function(data) { 
   	            var result="Pokemon which contains '"+ pokemonName+"' as pokemon in their next-evolution : "+"<br>";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
             for(x in data.pokemon){
             	var jsonObj= data.pokemon[x].next_evolution;
             	for (i in jsonObj) {
             		if((jsonObj[i].name).toLowerCase()==pokemonName){
             			found=true;
             			 result +=  data.pokemon[x].name+ "<br>";       
             		}
                  
                    }
             }
             if(found==true){
            document.getElementById("Answer").innerHTML = result; 
             }else{
             	document.getElementById("Answer").innerHTML = "There is no such pokemon whose name is '"+pokemonName+"' in next evolution"; 
             }
           });
       }
    }
    var getPokenmonWithWeakness= function(weakness){
    	if(weakness==undefined||weakness==null||weakness==''){
   	            alert("Invalid pokemon weakness");
       }else{
   	   $.getJSON('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json', function(data) { 
   	            var result="All pokemon with "+weakness+ " as weakness : "+"<br>";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
             for(x in data.pokemon){
             	var jsonArr = data.pokemon[x].weaknesses;
             	for (i in jsonArr) {
             		if((jsonArr[i]).toLowerCase()==weakness){    // comparision for weakness
             			found=true;
             			 result +=  data.pokemon[x].name+ "<br>";   // combine all pokemon name in string
             		}
                  
                    }
             }
             if(found){
            document.getElementById("Answer").innerHTML = result; 
            }else{
            	document.getElementById("Answer").innerHTML= "There is no such pokemon weakness";
            }
           });
       }
    }

  
 switch(Number(temp)){
 	case 1:
 	     var pokemonName = window.prompt("Enter pokenman name to get it information");
           pokemonName = pokemonName.toLowerCase();
         getPokemonDetail(pokemonName);
     break;

     case 2:
             var pokemonName = window.prompt("Enter pokemon name ");
               pokemonName = pokemonName.toLowerCase();
             getPokemonName(pokemonName);
       
      break;
      
     case 3:
          var weakness = window.prompt("Enter a weakness");
            weakness = weakness.toLowerCase();
          getPokenmonWithWeakness(weakness);
        break;
        
      default:
          alert("Enter valid input");  

 }



 
 