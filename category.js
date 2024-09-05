const categoryList = document.querySelector("#categorylist");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="productlist.html?category=${category.category}">${category.category}</a></li>`;
    });
  });



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

/*   fetch("https://kea-alt-del.dk/t7/api/categories")
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
} */