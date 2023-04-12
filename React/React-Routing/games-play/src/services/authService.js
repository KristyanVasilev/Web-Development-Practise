import { requestFactory } from './requester';

const endPoints = {
    login: 'http://localhost:3030/users/login',
    register: 'http://localhost:3030/users/register',
    logout: 'http://localhost:3030/users/logout',
};

export const authServiceFactory = (accessToken) => {
const request = requestFactory(accessToken);

    return {
        login : async (loginData) => {
            return await request.post(endPoints.login, loginData);
        },

        register : async (registerData) => {
            return await request.post(endPoints.register, registerData);
        },

        logout : async () => {
            return await request.post(endPoints.logout);
        },
    }
}