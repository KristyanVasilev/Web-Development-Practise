import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js"

const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

// TODO: change user object to project requirements

export async function login(email, password) {
    const result = await post(endPoints.login, { email, password });
    setUserData(result);
}

export async function register(email, password) {
    const result = await post(endPoints.register, { email, password });
    setUserData(result);
}

export async function logout() {
    get(endPoints.logout);
    clearUserData();
}