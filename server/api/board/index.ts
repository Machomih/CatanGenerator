import {createMap} from "~/server/utils/Generator"

export default defineEventHandler(async () => {
    return createMap(boardSizes,hexArray,numberArray, true, true)
})

const boardSizes: Array<number> = [3,4,5,4,3]
const numberArray: Array<number> = [0,2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]
const hexArray: Array<string> = ["woodHex","woodHex","woodHex","woodHex","clayHex","clayHex","clayHex","sheepHex","sheepHex","sheepHex","sheepHex","wheatHex","wheatHex","wheatHex","wheatHex","oreHex","oreHex","oreHex"]