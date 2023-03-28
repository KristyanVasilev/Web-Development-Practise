import { get, post, put, del } from "./api.js"

const endPoints = {
    catalog: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums',
    byId: '/data/albums/',
};

export async function getAllAlbums() {
    return get(endPoints.catalog);
}

export async function getAlbumLikes(albumId) {
    return get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function getAlbumById(id) {
    return get(endPoints.byId + id);
}

export async function createAlbum(data) {
    return post(`/data/albums`, data);
}

export async function editAlbum(id, data) {
    return put(endPoints.byId + id, data);
}

export async function deleteAlbum(id) {
    return del(endPoints.byId + id);
}