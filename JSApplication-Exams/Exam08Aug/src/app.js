import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "./util.js";
import { layoutTemplate } from "./views/layout.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./data/auth.js";
import { createPage } from "./views/create.js";
import { myBookPage } from "./views/myBooks.js";
import { detailsPage } from "./views/details.js"; 
import { editPage } from "./views/edit.js"; 

//TODO: change render root depending on project structure
const root = document.getElementById('container');

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/create', createPage);
page('/myBooks', myBookPage);
page('/details/:id', detailsPage);
page('/details/:id/edit', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
}

//TODO: inject dependencies
function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx){
    logout();
    ctx.page.redirect('/');
}