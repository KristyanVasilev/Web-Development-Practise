import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllPosts } from "../data/services.js";
import { postsPreview } from "./common.js";

//TODO: replace with actual home page

const homeTemplate = (posts) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    ${
        posts.length === 0 ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
         : html`<div class="all-posts">
                ${posts.map(postsPreview)}                
                </div>`
    }  
</section>`;

export async function homePage(ctx) {
    const posts = await getAllPosts();
    console.log(posts);
    ctx.render(homeTemplate(posts));
}