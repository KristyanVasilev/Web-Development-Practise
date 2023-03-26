import { get, post, put, del } from "./api.js"

const endPoints = {
    catalog: '/data/books?sortBy=_createdOn%20desc',
    create: '/data/books',
    byId: '/data/books/',
    likeBook: '/data/likes',
};

export async function getAllBooks() {
    return get(endPoints.catalog);
}

export async function getBookById(id) {
    return get(endPoints.byId + id);
}

export async function createBook(data) {
    return post(endPoints.create, data);
}

export async function getMyBooks(userId) {
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function editBook(id, data) {
    return put(endPoints.byId + id, data);
}

export async function deleteBook(id) {
    return del(endPoints.byId + id);
}

export async function likeBook(id) {
    const bookId = id;
    return post(endPoints.likeBook, { bookId });
}

export async function getLikedBooksById(bookId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}

export async function getMyLikedBooksById(bookId, userId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}