import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteAlbum, getAlbumById, getAlbumLikes } from "../data/services.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, onDelete, likes) => html`
<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src="${album.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${album.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

  <div id="action-buttons">
   
    ${album.canLike ? html` 
    <a href="" id="like-btn">Like</a>` : null}

    ${album.canEdit ? html` 
    <a href="/details/${album._id}/edit" id="edit-btn">Edit</a>
    <a @click=${onDelete} href="javascript:void(0) id="delete-btn">Delete</a>` : null}

  </div>
</div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const album = await getAlbumById(id);
    const userData = await getUserData();
    const likes = await getAlbumLikes(id);

    if (userData && userData._id == album._ownerId) {
        album.canEdit = true;
    }

    if (userData && userData._id != album._ownerId) {
        album.canLike = true;
    }

    ctx.render(detailsTemplate(album, onDelete, likes));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteAlbum(id);
            ctx.page.redirect('/albums');
        }
    }
}