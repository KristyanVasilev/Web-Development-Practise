import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums } from "../data/services.js";
import { albumPreview } from "./common.js";

//done

const albumsTemplate = (albums) => html`
<section id="dashboard">
<h2>Albums</h2>
<ul class="card-wrapper">
${albums.length === 0 ? html`<h2>There are no albums added yet.</h2>`
: html`<div class="all-posts">
        ${albums.map(albumPreview)}                
        </div>`
}  
</ul>
</section>`;

export async function albumsPage(ctx) {
    const albums = await getAllAlbums();
    console.log(albums);
    ctx.render(albumsTemplate(albums));
}