import BoardMap from "~/server/api/board/boardMap";

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const map = new BoardMap(query.sixEight, query.twoTwelve, query.desert, query.numberOfPlayers, query.extension, query.scenario)
    return map.getMap()
})