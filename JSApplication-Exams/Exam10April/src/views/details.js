import { html } from "../../node_modules/lit-html/lit-html.js";
import { deletePost, getPostById } from "../data/services.js";
import { getUserData } from "../util.js";

const detailsTemplate = (post, onDelete) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${post.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>

                <div class="btns">
                ${post.canEdit ? html` 
                <a class="edit-btn btn" href="/details/${post._id}/edit">Edit</a>
                <a class="delete-btn btn" @click=${onDelete} href="javascript:void(0)">Delete</a>` : null}

                ${post.canDonate ? html` 
                <a href="#" class="donate-btn btn">Donate</a>` : null}
                
                </div>
            </div>
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const post = await getPostById(id);
    const userData = await getUserData();

    if (userData && userData._id == post._ownerId) {
        post.canEdit = true;
    }

    if (userData && userData._id != post._ownerId) {
        post.canDonate = true;
    }

    ctx.render(detailsTemplate(post, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deletePost(id);
            ctx.page.redirect('/');
        }
    }
}