import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteProduct, getProductById } from "../data/services.js";
import { getUserData } from "../util.js";

const detailsTemplate = (product, onDelete) => html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src="${product.imageUrl}" alt="example1" />
  <p id="details-title">${product.title}</p>
  <p id="details-category">
    Category: <span id="categories">${product.category}</span>
  </p>
  <p id="details-price">
    Price: <span id="price-number">${product.price}</span>$</p>
  <div id="info-wrapper">
    <div id="details-description">
      <h4>Bought: <span id="buys">0</span> times.</h4>
      <span>${product.description}</span>
    </div>
  </div>

  <div id="action-buttons">   
    ${product.canEdit ? html` 
    <a href="/details/${product._id}/edit" id="edit-btn">Edit</a>
    <a @click=${onDelete} href="javascript:void(0) id="delete-btn">Delete</a>` : null}

    ${product.canBuy ? html` 
    <a href="" id="buy-btn">Buy</a>` : null}
 
  </div>
</div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const product = await getProductById(id);
    const userData = await getUserData();

    if (userData && userData._id == product._ownerId) {
        product.canEdit = true;
    }

    if (userData && userData._id != product._ownerId) {
        product.canBuy = true;
    }

    ctx.render(detailsTemplate(product, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteProduct(id);
            ctx.page.redirect('/products');
        }
    }
}