import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteBook, getBookById, getLikedBooksById, getMyLikedBooksById, likeBook } from "../data/services.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, onDelete, likes, onLike) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <div class="actions">
        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
        ${book.canEdit ? html` 
        <a class="button" href="/details/${book._id}/edit" id="edit-btn">Edit</a>
        <a class="button" @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}

        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${book.canLike ? html` 
        <a class="button" @click=${onLike} href="javascript:void(0)">Like</a>` : null}
        

        <!-- ( for Guests and Users )  -->
        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: ${likes}</span>
        </div>
        <!-- Bonus -->
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const book = await getBookById(id);
    const userData = await getUserData();
    const likes = await getLikedBooksById(id);
    const myLikes = await getMyLikedBooksById(id, userData);

    if (userData && userData._id == book._ownerId) {
        book.canEdit = true;
    }
    else {
        book.canLike = true;
    }

    ctx.render(detailsTemplate(book, onDelete, likes, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteBook(id);
            ctx.page.redirect('/');
        }
    }

    async function onLike() {
        await likeBook(id);
        ctx.page.redirect(`/details/${id}`);
    }
}