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

export function createMap(rowSizes: Array<number>, hexArray: Array<string>, numberArray: Array<number>): Array<HexRow> {
    const hexRows: Array<HexRow> = [];
    const hexes: Array<Hex> = generateHexEntries(hexArray, numberArray);

    let hexIndex = 0;

    for (const rowSize of rowSizes) {
        const hexRow = new HexRow();
        hexRow.size = rowSize;

        for (let i = 0; i < rowSize; i++) {
            hexRow.push(hexes[hexIndex++] || new Hex());
        }

        hexRows.push(hexRow);
    }

    return hexRows;
}

function generateHexEntries(hexArray: Array<string>, numberArray: Array<number>): Array<Hex> {
    const hexTiles = generateRandomList(hexArray);
    const numbers = generateRandomList(numberArray);
    const hexEntries: Array<Hex> = [];

    let numberIndex = 0;

    for (const hexTile of hexTiles) {
        const hex = new Hex();
        hex.name = hexTile;

        // Assign numbers, skip for "dessertHex"
        if (hexTile === "desertHex") {
            hex.number = 0;
        } else if (numberIndex < numbers.length) {
            hex.number = numbers[numberIndex++];
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
