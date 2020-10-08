import { useFish } from './fishdataprovider.js'
import { FishList } from './fishlist.js'

const allTheFish = useFish()
 
// for (const fish of allTheFish) {
//     console.log(fish)
// } 
FishList()