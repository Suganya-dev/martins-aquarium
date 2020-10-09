
import { Tips } from './Tip.js'
import { useTips } from './TipDataProvider.js'

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