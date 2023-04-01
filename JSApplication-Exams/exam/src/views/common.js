import { html } from "../../node_modules/lit-html/lit-html.js";

export const fruitsPreview = (fruit) => html`
<div class="fruit">
<img src="${fruit.imageUrl}" alt="example1" />
<h3 class="title">${fruit.name}</h3>
<p class="description">${fruit.description}</p>
<a class="details-btn" href="/details/${fruit._id}">More Info</a>
</div>`;