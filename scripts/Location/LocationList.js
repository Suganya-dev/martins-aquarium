import {Uselocation} from './Locationdataprovider.js'
import {Location} from './Location.js'
export const LocationList =() => {
    const contentElement = document.querySelector(".travel__locations")
    const Locate  = Uselocation()

    let LocationHTMLrepresentation = " "
    for (const travel of Locate){
        LocationHTMLrepresentation +=  Location (travel)
    }

    contentElement.innerHTML +=`
    <div class="travel">
    <section class="travel__locations">
    ${LocationHTMLrepresentation}         
                
    </section>  
     
    </div>
    `
}