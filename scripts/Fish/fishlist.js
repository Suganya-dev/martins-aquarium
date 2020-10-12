import { Fish } from './fish.js'
import { useFish } from './fishdataprovider.js'
export const FishList = () => {
    const contentElement = document.querySelector(".left_container")

    const fishes = useFish()

    let fishHTMLRepresentations =""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
        // console.log(fish)
    }

    contentElement.innerHTML += `
    <section class="fishlist">
    <h2><b>fish list</b></h2>
    <div class="fishlist_fishtank">
    ${fishHTMLRepresentations}
</div>
</section>`
}



