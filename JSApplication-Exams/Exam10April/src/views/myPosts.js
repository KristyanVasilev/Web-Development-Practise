import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyPosts } from "../data/services.js";
import { getUserData } from "../util.js";
import { postsPreview } from "./common.js";

//done

const myPostsTemplate = (posts) => html`
<sectionid="my-posts-page">
<h1 class="title">My Posts</h1>
${
    posts.length === 0 ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
     : html`<div class="my-posts">
            ${posts.map(postsPreview)}
            </div>`
}
</section>`;

export async function myPostsPage(ctx) {
    const userData = getUserData();
    const posts = await getMyPosts(userData._id);
    console.log(posts);
    ctx.render(myPostsTemplate(posts));
}