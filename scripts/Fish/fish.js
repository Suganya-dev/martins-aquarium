export const Fish = (fishObj) => {
    return `
    
        <div class="fish1">	  
        <p> image:</p>	                    
        <img class="fish1__image" src="${fishObj.image}"	 alt=""  width="200" height="200">	  
        <p class="fish1__name">Name: ${fishObj.name}</p>	                   
        <pclass="fish1__species">Species:${fishObj.Species}</p>	
        <pclass="fish1__length">Length:${fishObj.length}</p>	
        <pclass="fish1__location">Location: ${fishObj.location}</p>	
        <p class="fish1__diet">Diet: ${fishObj.diet}</p>	
       </div>
       `
    } 

    

 