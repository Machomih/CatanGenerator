class HexRow {
    size: number = 0;
    hexRow: Array<Hex> = [];

    constructor(hexes: Array<Hex>) {
        this.size = hexes.length;

        for (const hex of hexes) {
            this.hexRow.push(hex);
        }
    }
}