// Convert check login function according to ES6 

let checkLogin = (email,password,allUsers)=>{     // arrow function
	let isUserFound = false;                      
	let passwordCorrect =  false;

	for(currentUser of allUsers){       // for of loop so it will directly access object
		console.log(currentUser);
		if(currentUser[`email`]==email){
			if(currentUser[`password`]==password){
				isUserFound=true;

				passwordCorrect= true;
				break;
			}else{
				isUserFound=true;
				passwordCorrect=false;
				break;
			}
		}else{
			isUserFound=false;
		}
	}

	if(isUserFound==true && passwordCorrect==true){
		alert(`You are logged in`);
	}else if(isUserFound==true && passwordCorrect==false){
		alert(`You have provided incorrect password`);
	}else{
		alert(`No user with this email found`);
	}
}




// Modify bubble sort according to ES6

  
let bubble_sort = (a)=>{
	let swapp;
	let n=a.length -1;
	let x=a;
	do{
		swapp=false;
		for(let i=0;i<n;i++){
			if(x[i]>x[i+1]){
				let temp=x[i];
				x[i]=x[i+1];
				x[i+1]=temp;
				swapp=true;
			}
		}
		n--
	}while(swapp)

	return x;
}