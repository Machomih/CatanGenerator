import {createMap} from "~/server/utils/Generator"

export default defineEventHandler(async (event) => {
    return createMap(boardSizes,hexMap,numberMap)
})

const boardSizes: Array<number> = [3,4,5,4,3]
const numberMap: Map<number, number> = new Map([[2, 1], [3, 2], [4, 2], [5, 2], [6, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 1]])
const hexMap: Map<string, number> = new Map([["woodHex", 4], ["clayHex", 3], ["sheepHex", 4], ["wheatHex", 4], ["oreHex", 3], ["desertHex", 1]])
