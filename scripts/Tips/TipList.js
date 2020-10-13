
import { Tips } from './Tip.js'
import { useTips } from './TipDataProvider.js'
import {useQuotes} from './TipDataProvider.js'
import {Quotes} from './Tip.js'

export const TipList = () => {
    const contentElement = document.querySelector(".right_container")
    const fishtips = useTips()

let TipsHTMLreprenstation = " "
for(const tip of fishtips){
    TipsHTMLreprenstation += Tips(tip)
}
contentElement.innerHTML += `
<section class="right_container">
<h2> <b>useful tips</b> </h2>
<aside class="container__right">
${TipsHTMLreprenstation}             
</aside>`
}



export const Qcollect =() => {
   const  contentElement = document.querySelector(".quotes")
   const fishQuotes = useQuotes()

   let quotesHTMLrepresentation =""
   for(const quotes of  fishQuotes){
    quotesHTMLrepresentation +=  Quotes(quotes)
   }
 
   contentElement.innerHTML += `
   <aside class="right_container">
   <h2> Travel Quotes</h2> 
    <div class="quotes">
 ${quotesHTMLrepresentation}
</div>
</aside>
` }
