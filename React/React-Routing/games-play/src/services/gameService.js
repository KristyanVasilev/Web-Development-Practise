import * as request from './requester';

const endPoints = {
    baseUrl: 'http://localhost:3030/jsonstore/games',
};

export const getAllGames = async () => {
    const response = await request.get(endPoints.baseUrl);
    const games = Object.values(response);
    return games;
};

export const createGame = async (gameData) => {
    const result = await request.post(endPoints.baseUrl, gameData);

    return result;
};

export const getGameById = async (gameId) => {
    const result = await request.get(`${endPoints.baseUrl}/${gameId}`);

    return result;
};