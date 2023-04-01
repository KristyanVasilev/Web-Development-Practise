import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchFruit } from "../data/services.js";
import { getUserData } from "../util.js";

const searchTemplate = (fruits, onSearch) => html`
<section id="search">

<div class="form">
  <h2>Search</h2>
  <form class="search-form"  @submit=${onSearch}>
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
  ${fruits.length === 0 ? html`<p class="no-result">No result.</p>` : 
  fruits.map(fruit => html`
    <div class="fruit">
      <img src="${fruit.imageUrl}" alt="${fruit.name}" />
      <h3 class="title">${fruit.name}</h3>
      <p class="description">${fruit.description}</p>
      <a class="details-btn" href="/details/${fruit._id}">More Info</a>
    </div>
  `)}
  </div>
</section>`;

export async function searchPage(ctx) {

    async function onSearch(e) {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        const searchValue = searchInput.value.trim();

        if (!searchValue) {
            alert('Please enter a search keyword.');
            return;
        }

        const fruits = await searchFruit(searchValue);
        ctx.render(searchTemplate(fruits, onSearch));
    }

    const userData = await getUserData();
    ctx.render(searchTemplate([], onSearch));
}





