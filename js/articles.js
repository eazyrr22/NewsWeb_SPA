
function loadNews(){
    
}

function createArticle(header,description,content,urlImg) {
    // Create article
    const article = document.createElement("article");

    //title 
    const mainTitle = document.createElement('h1');
    mainTitle.textContent =  header;

    // description wrapper
    const wrapperDesc = document.createElement("div");
    wrapperDesc.className = "wrapper-description";
    const h5 = document.createElement("h5");
    h5.textContent = description;
    wrapperDesc.appendChild(h5);

    // wrapper content 
    const wrapperContent = document.createElement("div");
    wrapperContent.className = "wrapper-content";
    const p = document.createElement("p");
    p.textContent = content;
    wrapperContent.appendChild(p);

    // img wrapper
    const wrapperImage = document.createElement("div");
    wrapperImage.className = "wrapper-image";
    const img = document.createElement("img");
    img.src = urlImg;
    img.alt = "articl image";
    wrapperImage.appendChild(img);

    // Append all wrappers to <article>
    article.appendChild(mainTitle);
    article.appendChild(wrapperDesc);
    article.appendChild(wrapperContent);
    article.appendChild(wrapperImage);

    // append <article> to the body 
    document.body.appendChild(article);

}