const categoryList = document.querySelector("#categorylist");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="productlist.html?category=${category.category}">${category.category}</a></li>`;
    });
  });

