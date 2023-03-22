import { get, post, put, del } from "./api.js"

const endPoints = {
    catalog: '/data/offers?sortBy=_createdOn%20desc',
    byId: '/data/offers/',
};

export async function getAllOffers() {
    return get(endPoints.catalog);
}

export async function getById(id) {
    return get(endPoints.byId + id);
}

export async function createOffer(data) {
    return post(endPoints.catalog, data);
}

export async function editOffer(id, data) {
    return put(endPoints.byId + id, data);
}

export async function deleteOffer(id) {
    return del(endPoints.byId + id);
}