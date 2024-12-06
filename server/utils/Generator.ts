import {optimizeMap} from "./Optimizator"

let globalNumberArray: Array<number> = []
let globalRowArray: Array<number> = []

class HexRow {
    size: number = 0;
    hexes: Array<Hex> = [];

    push(hex: Hex) {
        this.hexes.push(hex);
    }
}

class Hex {
    name: string = "";
    number: number = 0;
    bullets: number = 0;
}

export function createMap(rowSizes: Array<number>,
                          hexArray: Array<string>,
                          numberArray: Array<number>,
                          avoidAdjacentSixAndEight: boolean = false,
                          avoidAdjacentTwoAndTwelve: boolean = false): Array<HexRow> {
    const hexRows: Array<HexRow> = [];
    const hexes: Array<Hex> = generateHexEntries(hexArray, numberArray);

    globalRowArray = rowSizes
    let hexIndex = 0;

    for (const rowSize of rowSizes) {
        const hexRow = new HexRow();
        hexRow.size = rowSize;

        for (let i = 0; i < rowSize; i++) {
            hexRow.push(hexes[hexIndex++] || new Hex());
        }

        hexRows.push(hexRow);
    }

    if(avoidAdjacentSixAndEight) {
        optimizeMap(globalRowArray, globalNumberArray)
    }

    return hexRows;
}

function generateHexEntries(hexArray: Array<string>, numberArray: Array<number>): Array<Hex> {
    const hexTiles = generateRandomList(hexArray);
    const numbers = generateRandomList(numberArray);
    const hexEntries: Array<Hex> = [];

    globalNumberArray = numbers
    let numberIndex = 0;

    for (const number of numbers) {
        const hex = new Hex();
        hex.number = number;

        // Assign hexTiles, add desertHex for 0
        if (number === 0) {
            hex.name = "desertHex";
        } else if (numberIndex < numbers.length) {
            hex.name = hexTiles[numberIndex++];
        }
        hex.bullets = getBullets(hex.number)

        hexEntries.push(hex);
    }

    return hexEntries;
}

function generateRandomList<K>(inputArray: Array<K>): Array<K> {

    // Shuffle the list using Fisher-Yates algorithm
    for (let i = inputArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [inputArray[i], inputArray[randomIndex]] = [inputArray[randomIndex], inputArray[i]];
    }

    return inputArray;
}

function getBullets(hexNumber: number) {
    let number = 0;
    if (hexNumber > 7) number = 13 - hexNumber;
    if (hexNumber < 7 && hexNumber != 0) number = hexNumber - 1;
    return number
}