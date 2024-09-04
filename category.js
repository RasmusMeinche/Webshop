/* const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate").content;
const categoryList = document.querySelector("#categoryList");
const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<section><a href="index.html?category=${category.category}">${category.category}</a></section>`;
    });
  });

if (params.has("category")) {
  url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
} */


/* fetch("https://kea-alt-del.dk/t7/api/categories")
  .then(res=>res.json())
  .then(showCategories)

  function showCategories(cats){
    //fanger vores template
    const template = document.querySelector("template").content;
    //cloner
    const copy = template.cloneNode(true);
    //ændrer indhold
    copy.querySelector("a").textContent = cat.category;
    copy.querySelector("a").href = `productlist.html?category=${cat.category}`;
    //appender
    document.querySelector(".categorylist ol").appendChild(copy);
  } */

  fetch("https://kea-alt-del.dk/t7/api/categories")
  .then(res => res.json())
  .then(showCategories);

function showCategories(cats) {
  // fanger vores template
  const template = document.querySelector("template").content;

  // loop gennem hver kategori i cats
  cats.forEach(cat => {
    // cloner
    const copy = template.cloneNode(true);
    // ændrer indhold
    copy.querySelector("a").textContent = cat.category;
    copy.querySelector("a").href = `productlist.html?category=${cat.category}`;
    // appender
    document.querySelector(".categorylist ol").appendChild(copy);
  });
}