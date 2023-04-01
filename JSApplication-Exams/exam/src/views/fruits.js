import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFruits } from "../data/services.js";
import { fruitsPreview } from "./common.js";

//done

const fruitsTemplate = (fruits) => html`
<h2>Fruits</h2>
<section id="dashboard">
${fruits.length === 0 ? html`<h2>No fruit info yet.</h2>`
: html`${fruits.map(fruitsPreview)}`
}  
</section>`;

export async function fruitsPage(ctx) {
    const fruits = await getAllFruits();
    console.log(fruits);
    ctx.render(fruitsTemplate(fruits));
}