import { createPost } from "./createNewPost.js";
import { getNews } from "js/fetchNews.js";

// load the home page including a header,a list of preview article cards and a footer 

export function LoadHomePage(cardsArr = 5) {

    createHeader();
    createFooter();

    // cards container wrapper
    const cardsContainer = document.createElement('div')
    cardsContainer.className = 'cards_container';

    // destructing article details from fetched news & appending to the cards container
    for (let i = 0; i < cardsArr; i++) {
        const news = getNews();
        for (let article of news) {
            const { author, title, urlToImg } = article;
            const articleCard = createPreviewArticleCard(author, title, urlToImg);
            cardsContainer.appendChild(articleCard);
        }
    }
    document.body.appendChild(cardsContainer);
}

// create and append a header contaoning a nav bar in 

export function createHeader() {

    const header = document.createElement("header");

    // Logo row
    const logoRow = document.createElement("div");
    logoRow.className = "logo-row";

    const logo = document.createElement("img");
    // logo.src = "https://via.placeholder.com/120x50?text=Logo";
    logo.alt = "Site Logo";

    logoRow.appendChild(logo);
    header.appendChild(logoRow);


    const nav = document.createElement("nav");
    nav.className = "header-nav";

    // Login
    const loginDiv = document.createElement("div");
    loginDiv.className = "nav-item";

    const loginA = document.createElement("a");
    loginA.href = "#login";
    loginA.textContent = "Login";

    const loginImg = document.createElement("img");
    // loginImg.src = "https://via.placeholder.com/40?text=👤";
    loginImg.alt = "Login";

    loginDiv.appendChild(loginA);
    loginDiv.appendChild(loginImg);

    // Posts
    const postsDiv = document.createElement("div");
    postsDiv.className = "nav-item";

    const postsA = document.createElement("a");
    postsA.href = "#posts";
    postsA.textContent = "Posts";

    const postsImg = document.createElement("img");
    // postsImg.src = "https://via.placeholder.com/40?text=📝";
    postsImg.alt = "Posts";

    postsDiv.appendChild(postsA);
    postsDiv.appendChild(postsImg);

    // Add Post
    const addPostDiv = document.createElement("div");
    addPostDiv.className = "nav-item";

    const addPostA = document.createElement("a");
    addPostA.href = "#addpost";
    addPostA.textContent = "Add Post";

    const addPostImg = document.createElement("img");
    // addPostImg.src = "https://via.placeholder.com/40?text=➕";
    addPostImg.alt = "Add Post";

    addPostDiv.appendChild(addPostA);
    addPostDiv.appendChild(addPostImg);

    // Put everything into nav
    nav.appendChild(loginDiv);
    nav.appendChild(postsDiv);
    nav.appendChild(addPostDiv);

    // Append nav to header
    header.appendChild(nav);

    document.body.appendChild(header);
}

// create a perview article card for homepage display 

export function createPreviewArticleCard(author, title, imageUrl) {
    // Main card container
    const card = document.createElement("div");
    card.className = "news-card";

    // Author div
    const authorDiv = document.createElement("div");
    authorDiv.className = "news-author";
    authorDiv.textContent = author;

    // Title div
    const titleDiv = document.createElement("div");
    titleDiv.className = "news-title";
    titleDiv.textContent = title;

    // Image element
    const img = document.createElement("img");
    img.className = "news-image";
    img.src = imageUrl;
    img.alt = title;

    // Put everything inside the card
    card.appendChild(authorDiv);
    card.appendChild(titleDiv);
    card.appendChild(img);

    return card;
}

// create and append a footer 

export function createFooter() {
    const footer = document.createElement('footer');
    //contact us
    const contactUsWrapper = document.createElement('div');
    contactUsWrapper.className = 'footer_item';

    const contactUsA = document.createElement("a");
    contactUsA.href = "#contactUs";
    contactUsA.textContent = "contact us";

    contactUsWrapper.appendChild(contactUsA);

    //term of use
    const terms = document.createElement("div");
    terms.className = "footer-item";

    const termsA = document.createElement("a");
    termsA.href = "#terms";
    termsA.textContent = "terms of use";

    terms.appendChild(termsA);

    footer.appendChild(contactUsWrapper);
    footer.appendChild(terms);

    document.body.appendChild(footer)

}

LoadHomePage();
document.body.appendChild(createPost())