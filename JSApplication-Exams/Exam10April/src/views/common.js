import { html } from "../../node_modules/lit-html/lit-html.js";

export const postsPreview = (post) => html`<div class="post">
<h2 class="post-title">${post.titlte}</h2>
<img class="post-image" src="${post.imageUrl}" alt="Material Image">
<div class="btn-wrapper">
    <a href="/details/${post._id}" class="details-btn btn">Details</a>
</div>
</div>`;

