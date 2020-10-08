export const Fish = (fish) => {
    return `
    
        <section class="fish1">	    
                    
        <p>Name:</p>	                   
        <p class="fish1__name"> ${fishobj.name}</p>	                   
        <p> image:</p>	                    
        <img src="${fishobj.image}"	 alt="" >	
        <p>Species:</p>	
        <pclass="fish1__species">${fishobj.Species}</p>	
        <p>Length:</p>	
        <pclass="fish1__length">${fishobj.length}</p>	
        <p>Location:</p>	
        <pclass="fish1__location"> ${fishobj.location}</p>	
         p>Diet:</p>	
        <p class="fish1__diet"> ${fishobj.diet}</p>	
       </section>`
    } 