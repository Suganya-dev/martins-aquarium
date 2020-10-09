import { useFish } from './Fish/fishdataprovider.js'
import { FishList } from './Fish/fishlist.js'

const allTheFish = useFish()
 
// for (const fish of allTheFish) {
//     console.log(fish)
// } 
FishList()