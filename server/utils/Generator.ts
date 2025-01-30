import getNeighbors from "~/server/utils/functions";

export class Generator {

    private globalRowSizes: number[] = []
    private globalHexArray: string[] = []
    private globalNumberArray: number[] = []
    private numberMap: number[][] = []

    private sixEightArray: number[] = [6, 6, 8, 8]
    private twoTwelveArray: number[] = [2, 12]

    public generateNumberList(sixEightRule: boolean, twoTwelveRule: boolean, desertRule: boolean): Array<number> {
        let numberArray: number[] = []
        if (desertRule || sixEightRule || twoTwelveRule) {
            if (desertRule) {
                const middleRow = this.globalRowSizes.length / 2
                const middleOfTheBoard: number = this.globalRowSizes[middleRow] / 2
                this.numberMap[middleRow][middleOfTheBoard] = 0;
            }

            if (sixEightRule) {
                this.placeRestrictedNumbers(6)
            }

            if (twoTwelveRule) {
                this.placeRestrictedNumbers(2)
            }

        }
        else numberArray = this.generateRandomList(this.globalNumberArray)

        return numberArray
    }


    public generateHexesList() {
        return this.generateRandomList(this.globalHexArray)
    }

    public getBullets(hexNumber: number): number {
        let number = 0;
        if (hexNumber > 7) number = 13 - hexNumber;
        if (hexNumber < 7 && hexNumber != 0) number = hexNumber - 1;
        return number
    }

    private generateRandomList<K>(inputArray: Array<K>): Array<K> {
        // Shuffle the list using Fisher-Yates algorithm
        for (let i = inputArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [inputArray[i], inputArray[randomIndex]] = [inputArray[randomIndex], inputArray[i]];
        }
        return inputArray;
    }

    private placeRestrictedNumbers(twoOrSix: number): void {
        let restrictedNumbers: number[] = []
        if (twoOrSix === 2) restrictedNumbers = this.twoTwelveArray;
        else if (twoOrSix === 6) restrictedNumbers = this.sixEightArray;

        for (const restrictedNumber of restrictedNumbers) {
            const [row, col] = this.checkPassingConditions(twoOrSix);
            this.numberMap[row][col] = restrictedNumber
        }
    }


    private checkPassingConditions(twoOrSix: number): number[] {
        let passingConditions: boolean = false;
        const restrictedNumbers: number[] = []

        if (twoOrSix === 2) {
            restrictedNumbers.push(2)
            restrictedNumbers.push(12)
        }
        if (twoOrSix === 6) {
            restrictedNumbers.push(6)
            restrictedNumbers.push(8)
        }

        let [row, col] = [-1, -1]
        while (!passingConditions) {
            [row, col] = this.getRandomPositions();
            // Verify if position generated is empty
            if (this.numberMap[row][col] !== undefined)
                continue

            const neighbors = getNeighbors(row, col)
            // Verify if neighbors are not 6 or 8
            for (const neighbor of neighbors) {
                const neighborRow = neighbor[0]
                const neighborCol = neighbor[1]
                if (this.numberMap[neighborRow][neighborCol] === restrictedNumbers[0] || this.numberMap[neighborRow][neighborCol] === restrictedNumbers[1]) {
                    break
                }
                passingConditions = true;
            }
        }
        return [row, col];
    }

    private getRandomPositions(): number[] {
        const randomRow = Math.floor(Math.random() * this.globalRowSizes.length)
        const randomColumn = Math.floor(Math.random() * this.globalRowSizes[randomRow])

        return [randomRow, randomColumn]
    }
}
