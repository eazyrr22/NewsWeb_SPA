import { createHeader,createFooter } from "./HomePage";

export function addPost(){
    // create and send form
const form = document.createElement("form");

// Author Name input
const authorDiv = document.createElement("div");
authorDiv.className = "form-group";

const authorLabel = document.createElement("label");
authorLabel.setAttribute("for", "author");
authorLabel.textContent = "Author Name";

const authorInput = document.createElement("input");
authorInput.type = "text";
authorInput.id = "author";
authorInput.name = "author";
authorInput.required = true;

authorDiv.appendChild(authorLabel);
authorDiv.appendChild(authorInput);
form.appendChild(authorDiv);

// Title input
const titleDiv = document.createElement("div");
titleDiv.className = "form-group";

const titleLabel = document.createElement("label");
titleLabel.setAttribute("for", "title");
titleLabel.textContent = "Title";

const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.id = "title";
titleInput.name = "title";
titleInput.required = true;

titleDiv.appendChild(titleLabel);
titleDiv.appendChild(titleInput);
form.appendChild(titleDiv);

// Content input
const contentDiv = document.createElement("div");
contentDiv.className = "form-group";

const contentLabel = document.createElement("label");
contentLabel.setAttribute("for", "content");
contentLabel.textContent = "Content";

const contentTextarea = document.createElement("textarea");
contentTextarea.id = "content";
contentTextarea.name = "content";
contentTextarea.rows = 5;   
contentTextarea.cols = 40;  
contentTextarea.required = true;

contentDiv.appendChild(contentLabel);
contentDiv.appendChild(contentTextarea);
form.appendChild(contentDiv);

// Image URL input
const imageDiv = document.createElement("div");
imageDiv.className = "form-group";

const imageLabel = document.createElement("label");
imageLabel.setAttribute("for", "image");
imageLabel.textContent = "Image URL";

const imageInput = document.createElement("input");
imageInput.type = "url";
imageInput.id = "image";
imageInput.name = "image";
imageInput.required = true;

imageDiv.appendChild(imageLabel);
imageDiv.appendChild(imageInput);
form.appendChild(imageDiv);

// Submit Button 
const submitDiv = document.createElement("div");
submitDiv.className = "form-group";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit";

submitDiv.appendChild(submitBtn);
form.appendChild(submitDiv);

// Append form to body
return form;

}