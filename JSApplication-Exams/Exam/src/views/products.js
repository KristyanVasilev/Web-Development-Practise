import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllProducts } from "../data/services.js";
import { productsPreview } from "./common.js";

//done

const productsTemplate = (products) => html`
<h2>Products</h2>
    <section id="dashboard">
      ${products.length === 0 ? html`<h2>No products yet.</h2>`
        : html`<div class="all-posts">
                ${products.map(productsPreview)}                
                </div>`
    }  
    </section>`;

export async function productsPage(ctx) {
    const products = await getAllProducts();
    console.log(products);
    ctx.render(productsTemplate(products));
}