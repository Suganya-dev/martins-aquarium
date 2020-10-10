export const Location =(travel) => {
    return `
    <div class="travel">
    <p > Name: </p>
    <p class="travel__name">${travel.name1}</p>
    <p> Image </p>
    <img class="travel__image" src ="${travel.image1}" alt="" width="300" height="350" >
   </div> 
    `
}

{/* <img class="fish1__image" src="${fishObj.image}"	 alt=""  width="200" height="200">	   */}


{/* <div class="fish1">	  
        <p> image:</p>	                    
        <img class="fish1__image" src="${fishObj.image}"	 alt=""  width="200" height="200">	  
        <p>Name:</p>	                   
        <p class="fish1__name"> ${fishObj.name}</p>	                   
         <p>Species:</p>	 */}