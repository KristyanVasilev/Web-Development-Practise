import { get, post, put, del } from "./api.js"

const endPoints = {
    catalog: '/data/posts?sortBy=_createdOn%20desc',
    create: '/data/posts',
    byId: '/data/posts/',
};

export async function getAllPosts() {
    return get(endPoints.catalog);
}

export async function getPostById(id) {
    return get(endPoints.byId + id);
}

export async function createPost(data) {
    return post(endPoints.create, data);
}

export async function getMyPosts(userId) {
    return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function editPost(id, data) {
    return put(endPoints.byId + id, data);
}

export async function deletePost(id) {
    return del(endPoints.byId + id);
}
