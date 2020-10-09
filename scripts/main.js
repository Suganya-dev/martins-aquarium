import { useFish } from './Fish/fishdataprovider.js'
import { FishList } from './Fish/fishlist.js'

const allTheFish = useFish()
 
// for (const fish of allTheFish) {
//     console.log(fish)
// } 
FishList()

import {useTips} from './TipDataProvider.js'
const alltheTips = useTips()
for (const tips of alltheTips){
    console.log(tips)
}
    