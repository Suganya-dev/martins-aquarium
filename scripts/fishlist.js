import { useFish } from './FishDataProvider.js'
export const FishList = () => {
    const contentElement = document.querySelector(".left_container")
    const fishes = useFish()
    contentElement.innerHTML += `
    <section class="fishlist">
    <h2><b>fish list</b></h2>
    <div class="fishcontainer">
    Placeholder for list of fishes
    </div>
</section>`
}