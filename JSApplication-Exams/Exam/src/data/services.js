import { get, post, put, del } from "./api.js"

const endPoints = {
    catalog: '/data/products?sortBy=_createdOn%20desc',
    create: '/data/products',
    byId: '/data/products/',
};

export async function getAllProducts() {
    return get(endPoints.catalog);
}

export async function getProductById(id) {
    return get(endPoints.byId + id);
}

export async function createProduct(data) {
    return post(endPoints.create, data);
}

// export async function getMyPosts(userId) {
//     return get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }

export async function editProduct(id, data) {
    return put(endPoints.byId + id, data);
}

export async function deleteProduct(id) {
    return del(endPoints.byId + id);
}