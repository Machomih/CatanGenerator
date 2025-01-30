export const useBoardStore = defineStore('board', async () => {
    const {data: boardData}= await useFetch('/api/board')

    const boardRows = boardData || []

    async function generate() {
        return true
    }

    return {boardRows, generate}
})