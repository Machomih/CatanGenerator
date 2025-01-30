import {Generator} from "~/server/utils/Generator"

export class BoardMap {
    private sixEight
    private twoTwelve
    private desert
    private numberOfPlayers
    private extension
    private scenario

    constructor(sixEight: boolean, twoTwelve: boolean, desert: boolean, numberOfPlayers: number, extension: string, scenario: string) {
        this.sixEight = sixEight
        this.twoTwelve = twoTwelve
        this.desert = desert
        this.numberOfPlayers = numberOfPlayers
        this.extension = extension
        this.scenario = scenario
    }

    getMap() {
        if (this.scenario === "default") {
            return this.createDefaultMap()
        }
    }

    private createDefaultMap() {

        const hexRows: Array<HexRow> = [];
        const hexes: Array<Hex> = this.generateHexEntries();
        for (const rowSize of globalRowSizes) {
            const hexRow = new HexRow(hexes.splice(0, rowSize));
            hexRows.push(hexRow);
        }

        return hexRows;
    }

    private generateHexEntries(): Array<Hex> {
        const generator = new Generator
        const hexTiles = generator.generateHexesList()
        const numbers = generator.generateNumberList(this.sixEight, this.twoTwelve, this.desert)
        const hexEntries: Array<Hex> = [];

        let numberIndex = 0;

        for (const number of numbers) {
            const hex = new Hex();
            hex.number = number;

            // Assign hexTiles, add desertHex for 0
            if (number === 0) hex.name = "desertHex";
            else if (numberIndex < numbers.length) {
                hex.name = hexTiles[numberIndex++];
            }
            hex.bullets = generator.getBullets(hex.number)

            hexEntries.push(hex);
        }

        return hexEntries;
    }
}