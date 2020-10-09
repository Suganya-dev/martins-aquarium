
import { Tips } from './Tip.js'
import { useTips } from './TipDataProvider.js'

export const tiplist = () => {
    const contentElement = document.querySelector(".right_container")
    const fishes = useTips()

let TipsHTMLreprenstation = " "
contentElement.innerHTML += `
<section class="right_container">
<h2> <b>useful tips</b> </h2>
<aside class="container__right">
${TipsHTMLreprenstation}             
</aside>
}