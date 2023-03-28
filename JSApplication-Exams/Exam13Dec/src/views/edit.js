import { html } from "../../node_modules/lit-html/lit-html.js";
import { editProduct, getProductById } from "../data/services.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (product, onEdit) => html`
<section id="edit">
      <div class="form">
        <h2>Edit Product</h2>
        <form class="edit-form" @submit=${onEdit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="${product.name}"/>

          <input
            type="text"
            name="imageUrl"
            id="product-image"
            placeholder="${product.imageUrl}"/>

          <input
            type="text"
            name="category"
            id="product-category"
            placeholder="${product.category}"/>

          <textarea
            id="product-description"
            name="description"
            placeholder="${product.description}"
            rows="5"
            cols="50"></textarea>
          
          <input
            type="text"
            name="price"
            id="product-price"
            placeholder="${product.price}"/>
          <button type="submit">post</button>
        </form>
      </div>
    </section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;

    const product = await getProductById(id);

    ctx.render(editTemplate(product, createSubmitHandler(onEdit)));

    async function onEdit(
        {
            name,
            imageUrl,
            category,
            description,
            price
        }) {

        if ([
            name,
            imageUrl,
            category,
            description,
            price
        ].some(f => f == '')) {
            return alert('All fields are required!');
        }

        await editProduct(id, {
            name,
            imageUrl,
            category,
            description,
            price
        });

        ctx.page.redirect('/details/' + id);
    }
}