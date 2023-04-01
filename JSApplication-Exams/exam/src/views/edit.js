import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFruit, getFruitById } from "../data/services.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (fruit, onEdit) => html`
<section id="edit">
<div class="form">
  <h2>Edit Fruit</h2>
  <form class="edit-form" @submit=${onEdit}>
    <input
      type="text"
      name="name"
      id="name"
      value="${fruit.name}"
    />
    <input
      type="text"
      name="imageUrl"
      id="Fruit-image"
      value="${fruit.imageUrl}"
    />
    <textarea
      id="fruit-description"
      name="description"
      rows="10"
      cols="50"
    >${fruit.description}</textarea>
    <textarea
      id="fruit-nutrition"
      name="nutrition"
      rows="10"
      cols="50"
    >${fruit.nutrition}</textarea>
    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;

    const fruit = await getFruitById(id);

    ctx.render(editTemplate(fruit, createSubmitHandler(onEdit)));

    async function onEdit(
        {
            name,
            imageUrl, 
            description, 
            nutrition 
        }) {

        if ([
            name,
            imageUrl, 
            description, 
            nutrition  
        ].some(f => f == '')) {
            return alert('All fields are required!');
        }

        await editFruit(id, {
            name,
            imageUrl, 
            description, 
            nutrition  
        });

        ctx.page.redirect('/details/' + id);
    }
}