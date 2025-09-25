const photos = JSON.parse(content);
/* put your code after this */

// Use document.querySelector("*parent") to select the parent element with the id "parent" and assign it to a variable named parent.
const parent = document.querySelector("#parent");

// Use a loop to iterate over each photo in the photos array.
// Inside the loop:
// Create a "figure" element using document.createElement.
// Call a function to append attributes to the image (which will be created later).
// Call a function to append a figure caption to the photo.
// Append the "figure" element to the parent element.
for (let photo of photos) {
    const figure = document.createElement("figure");

    // Create an <img> element and append it to the figure
    const img = createImage(photo);
    figure.appendChild(img);

    // Create and append a caption
    const caption = createCaption(photo);
    figure.appendChild(caption);

    // Append figure to parent element
    parent.appendChild(figure);
}

/* helper functions */

// Create a function named createHeader that takes a photo object as a parameter.
// Inside the function, use the document.createElement method to create an "h2" element.
// Create a text node for the photo title using document.createTextNode.
// Append the text node to the "h2" element.
// Return the "h2" element.
function createHeader(photo) {
    const h2 = document.createElement("h2");
    const text = document.createTextNode(photo.title);
    h2.appendChild(text);
    return h2;
}

// Create a function named createParagraph that takes a photo object as a parameter.
// Inside the function, use document.createElement to create a "p" (paragraph) element.
// Create a text node for the photo description using document.createTextNode.
// Append the text node to the "p" element.
// Return the "p" element.
function createParagraph(photo) {
    const p = document.createElement("p");
    const text = document.createTextNode(photo.description);
    p.appendChild(text);
    return p;
}  

// Create a function named createCaption that takes a photo object as a parameter.
// Inside the function:
// Create a "figcaption" element using document.createElement.
// Call the createHeader function and createParagraph function to append header and paragraph elements to the "figcaption" element.
// Call a function to create a color scheme using the createColorScheme function.
// Return the "figcaption" element.
function createCaption(photo) {
    const figcaption = document.createElement("figcaption");
    figcaption.appendChild(createHeader(photo));
    figcaption.appendChild(createParagraph(photo));
    createColorScheme(figcaption, photo);  // Pass both figcaption and photo
    return figcaption;
}

// Create a function named createImage that takes a photo object as a parameter.
// Inside the function:
// Use document.createElement to create an "img" element.
// Set the "src" attribute of the image using the photo's filename.
// Set the "alt" attribute of the image using the photo's title.
// Return the "img" element.
function createImage(photo) {
    const img = document.createElement("img");
    img.src = "images/" + photo.filename;  // Add the images/ directory
    img.alt = photo.title;
    return img;
}

// Create a function named createColorScheme that takes the "figcaption" element and a photo object as parameters.
// Inside the function:
// Use a loop to iterate over each color in the photo's colors array.
// Create a "span" element using document.createElement.
// Set the background color of the "span" element to the color's hexadecimal value.
// Append the "span" element to the "figcaption" element.
function createColorScheme(figcaption, photo) {
    for (let color of photo.colors) {
        const span = document.createElement("span");
        span.style.backgroundColor = color.hex;  //color is an object with hex property :p
        figcaption.appendChild(span);
    }
}