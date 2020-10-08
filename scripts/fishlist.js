import { Fish } from './fish.js'
import { useFish } from './FishDataProvider.js'
export const FishList = () => {
    const contentElement = document.querySelector(".container_left")

    const fishes = useFish()

    let fishHTMLRepresentations=""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
        // console.log(fish)
    }

    contentElement.innerHTML += `
    <section class="fishlist">
    <h2><b>fish list</b></h2>
    <div class="fishcontainer">
    ${fishHTMLRepresentations}
</div>
</section>`
}