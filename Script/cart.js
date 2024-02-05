//Add To-cart
const totalPrice = document.getElementById("total_price");
const productsGet = JSON.parse(localStorage.getItem("CartData")) || [];

var totalItems = productsGet.length;
document.querySelector("#quntity").innerText =
  "Total Quantity : " + " " + totalItems;

function updateTotalPrice() {
  const totalSum = productsGet.reduce((sum, item) => sum + item.price, 0);
  totalPrice.textContent = `Subtotal: ₹${totalSum.toFixed(2)}`;
  totalPrice.classList.add("removePriceTotal");
}

function renderItems(productsItems) {
  const container = document.querySelector(".box-container");

  container.innerHTML = ""; // Clear the container to prevent duplicate items

  productsItems.forEach((ele, index) => {
    const box = document.createElement("div");
    box.className = "box";

    // Create and append Image
    const img = document.createElement("img");
    img.src = ele.image_url;
    // box.appendChild(img);

    // Create and append Title
    const name = document.createElement("p");
    name.innerText = ele.name;
    name.className = "name";
    // box.appendChild(title);
    // Create and append Title
    const des = document.createElement("p");
    des.innerText = ele.description.slice(0,40);
    des.className = "des";
    // box.appendChild(title);

    // Create and append Price
    const price = document.createElement("p");
    price.innerText = `$${ele.price}`;
    price.className = "price";
    // box.appendChild(price);

    // Create and append Cart Trash Icon
    const cartTrash = document.createElement("i");
    cartTrash.className = "fa-sharp fa-solid fa-trash";
    cartTrash.addEventListener("click", () => removeItem(index, productsItems));
    // box.append(title,cartTrash,img,price);
    box.append(img,cartTrash,price,name,des);

    container.append(box);
  });

  updateTotalPrice();
}

function removeItem(index, productsItems) {
  productsItems.splice(index, 1);
  localStorage.setItem("CartData", JSON.stringify(productsItems));
  renderItems(productsItems);
}

function removeItem(index, productsItems) {
  productsItems.splice(index, 1);
  localStorage.setItem("CartData", JSON.stringify(productsItems));
  renderItems(productsItems);
}

// Assuming `productsGet` is defined elsewhere and contains the products data
renderItems(productsGet);

// Scroll Bar
let header = document.querySelector("#section-hero");
let footerElemnt = document.querySelector("#footer-top");
let scrollElemnt = document.createElement("div");
scrollElemnt.classList.add("back-to-top");
scrollElemnt.innerText = "UP";
footerElemnt.after(scrollElemnt);

function scrollTop() {
  header.scrollIntoView({ behavior: "smooth" });
}

scrollElemnt.addEventListener("click", scrollTop);
