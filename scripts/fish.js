export const Fish = (fishObj) => {
    return `
    
        <section class="fish1">	    
                    
        <p>Name:</p>	                   
        <p class="fish1__name"> ${fishObj.name}</p>	                   
        <p> image:</p>	                    
        <img src="${fishObj.image}"	 alt="" >	
        <p>Species:</p>	
        <pclass="fish1__species">${fishObj.Species}</p>	
        <p>Length:</p>	
        <pclass="fish1__length">${fishObj.length}</p>	
        <p>Location:</p>	
        <pclass="fish1__location"> ${fishObj.location}</p>	
         p>Diet:</p>	
        <p class="fish1__diet"> ${fishObj.diet}</p>	
       </section>`
    } 