import {Uselocation} from './Locationdataprovider'
export const LocationList =() => {
    const contentElement = document.querySelector("travel")
    const Locate  = Uselocation()

    contentElement.innerHTML += `
    <div class="travel">

    </div>
    `
}