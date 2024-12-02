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

export function createMap(rowSizes: Array<number>, hexMap: Map<string, number>, numberMap: Map<number, number>): Array<HexRow> {
    const hexRows: Array<HexRow> = [];
    const hexes: Array<Hex> = generateHexEntries(hexMap, numberMap);

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

function generateHexEntries(hexMap: Map<string, number>, numberMap: Map<number, number>): Array<Hex> {
    const hexNames = generateRandomList(hexMap);
    const numbers = generateRandomList(numberMap);
    const hexEntries: Array<Hex> = [];

    let numberIndex = 0;

    for (const hexName of hexNames) {
        const hex = new Hex();
        hex.name = hexName;

        // Assign numbers, skip for "dessertHex"
        if (hexName === "desertHex") {
            hex.number = 0;
        } else if (numberIndex < numbers.length) {
            hex.number = numbers[numberIndex++];
        }
        hex.bullets = getBullets(hex.number)

        hexEntries.push(hex);
    }

    return hexEntries;
}

function generateRandomList<K>(inputMap: Map<K, number>): Array<K> {
    const list: Array<K> = [];

    for (const [key, count] of inputMap.entries()) {
        for (let i = 0; i < count; i++) {
            list.push(key);
        }
    }

    // Shuffle the list using Fisher-Yates algorithm
    for (let i = list.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [list[i], list[randomIndex]] = [list[randomIndex], list[i]];
    }

    return list;
}

function getBullets(hexNumber: number) {
    let number = 0;
    if (hexNumber > 7)
        number = 13 - hexNumber;
    if (hexNumber < 7 && hexNumber != 0)
        number = hexNumber - 1;
    return number
}
