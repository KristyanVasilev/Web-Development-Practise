import { html } from "../../node_modules/lit-html/lit-html.js";

export const productsPreview = (product) => html`<div class="product">
<img src="${product.imageUrl}" alt="example1" />
<p class="title">
${product.title}
</p>
<p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
<a class="details-btn" href="/details/${product._id}">Details</a>
</div>`;