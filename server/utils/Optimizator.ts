let globalNumberArray: number[] = []
let globalRowArray: number[] = []

const EVEN_ROW_DIRECTIONS = [
    [-1, 0],  // Top
    [-1, 1],  // Top-right
    [0, -1],  // Left
    [0, 1],   // Right
    [1, 0],   // Bottom
    [1, 1]    // Bottom-right
];

const ODD_ROW_DIRECTIONS = [
    [-1, -1], // Top-left
    [-1, 0],  // Top
    [0, -1],  // Left
    [0, 1],   // Right
    [1, -1],  // Bottom-left
    [1, 0]    // Bottom
];

export function optimizeMap(rowArray: Array<number>, numberArray: Array<number>) {
    globalRowArray = rowArray;
    globalNumberArray = numberArray;

    const matrix :number[][] = createMatrix()
    getNeighbours(matrix,2,3)
}

// Creates a matrix of the random shuffled numbers
function createMatrix() {
    const localNumberArray: Array<number> = globalNumberArray;
    const matrix: Array<Array<number>> = []
    for (const rowArray of globalRowArray) {
        matrix.push(localNumberArray.splice(0, rowArray))
    }
    return matrix;
}

function getNeighbours(matrix: number[][], row: number, col: number) {
    const directions = row % 2 === 0 ? EVEN_ROW_DIRECTIONS : ODD_ROW_DIRECTIONS;

    return directions
        .map(([dRow, dCol]) => [row + dRow, col + dCol]) // Calculate new positions
        .filter(([newRow, newCol]) =>
            newRow >= 0 &&
            newRow < matrix.length &&
            newCol >= 0 &&
            newCol < (matrix[newRow]?.length || 0)
        ) // Filter valid neighbors
        .map(([newRow, newCol]) => [newRow, newCol, matrix[newRow][newCol]]); // Map to result format
}