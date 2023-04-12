import {requestFactory} from './requester';

const endPoints = {
    baseUrl: 'http://localhost:3030/data/games',
};

export const gameServiceFactory = (accessToken) => {
    const request = requestFactory(accessToken);

    const getAllGames = async () => {
        const response = await request.get(endPoints.baseUrl);
        const games = Object.values(response);
        return games;
    };

    const createGame = async (gameData) => {
        const result = await request.post(endPoints.baseUrl, gameData);

        return result;
    };

    const getGameById = async (gameId) => {
        const result = await request.get(`${endPoints.baseUrl}/${gameId}`);

        return result;
    };

    const editGame = async (gameId, data) => {
        const result = await request.put(`${endPoints.baseUrl}/${gameId}`, data);

        return result;
    };

    const deleteGame = async (gameId) => {
        const result = await request.del(`${endPoints.baseUrl}/${gameId}`);

        return result;
    };

    return {
        getAllGames,
        getGameById,
        createGame,
        deleteGame,
        editGame
    }
}