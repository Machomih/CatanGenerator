const NEIGHBORS_DIRECTIONS = [[-1, -1],  // Top-left
    [-1, 0],  // Top-right
    [0, -1],  // Left
    [0, 1],   // Right
    [1, 0],   // Bottom-left
    [1, 1]    // Bottom-right
];

export default function getNeighbors(col: number, row: number) {
    const mapOfNeighbors: number[][] = []
    for (const neighbor of NEIGHBORS_DIRECTIONS) {
        mapOfNeighbors.push([row + neighbor[0], col + neighbor[1]]);
    }
    return mapOfNeighbors
}