import { get, post, put, del } from "./api.js"

const endPoints = {
    catalog: '/data/fruits?sortBy=_createdOn%20desc',
    create: '/data/fruits',
    byId: '/data/fruits/',
};

export async function getAllFruits() {
    return get(endPoints.catalog);
}

export async function getFruitById(id) {
    return get(endPoints.byId + id);
}

export async function createFruit(data) {
    return post(endPoints.create, data);
}

export async function editFruit(id, data) {
    return put(endPoints.byId + id, data);
}

export async function deleteFruit(id) {
    return del(endPoints.byId + id);
}

export async function searchFruit(query) {
    return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}