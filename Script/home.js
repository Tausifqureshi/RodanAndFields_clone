//name show userlogin logic?

// let loginUser;
// window.addEventListener('load',()=>{
// let getUser =JSON.parse(localStorage.getItem("loginuser"))
// console.log(getUser)
// loginUser = getUser;
// let fullName =document.getElementById("storge");
// fullName.innerHTML= loginUser.name;
// console.log(fullName)
// })

//===================================Data-fetch Api=====================================//
async function getData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
} 
  
// let arr =  localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) :[];

// let cart = [];
//==========================Render-Products==============================================//
function displayData(allProduct) {
  //  container.innerHTML = "";
  allProduct.map(function (ele) {
    let productsDiv = document.createElement("div");
    productsDiv.setAttribute("class", "swiper-slide products-item");

    //Create Visit Button
    let visitBtn = document.createElement("p");
    visitBtn.innerText = "Best Sellers";
    visitBtn.classList.add("itemVisit");

    //Create Link Herf
    let link = document.createElement("a");
    link.href = "best-sell.html";
    link.append(visitBtn);

    // Create Image
    let img = document.createElement("img");
    img.src = ele.image_url;

    // Create Title
    let title = document.createElement("p");
    title.innerText = ele.name;
    title.classList.add("itemTitle");

    // Create Decription
    let desc = document.createElement("p");
    desc.innerText = ele.description;
    desc.classList.add("description");

    //Create Price
    let price = document.createElement("p");
    price.innerText = `$${ele.price}`;
    price.classList.add("itemPrice");

    //Create Rupies
    let rp = document.createElement("p");
    rp.innerText = "Retail Price";

    //Create Rating
    let rating = document.createElement("p");
    rating.innerText = "⭐⭐⭐⭐ 4.2 (2134)";
    rating.classList.add("itemRating");
    // Create Button
    let btn = document.createElement("button");
    btn.classList.add("itemBtn");
    btn.innerText = "ADD TO BAG";

    productsDiv.append(link, img, title, desc, price, rp, rating, btn);
    document.querySelector(".best-container").append(productsDiv);

    btn.addEventListener("click", () => addToCart(ele));
  });

  //========================================================================//
  localStorage.setItem("Data", JSON.stringify(allProduct));
  // console.log(allProduct);
  //========================================================================//
} 

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('CartData')) || [];
  console.log(cart)
  const isItemExist = cart.find(item => item.name === product.name);
  
  if (isItemExist) {
    alert('Product Already Added');
    window.location.href = 'cart.html';
    return;
  }
  
  cart.push(product);
  localStorage.setItem('CartData', JSON.stringify(cart));
  alert('Product Added');
}

//========================================================================//
// Banner Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// Cart Swiper
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
  
//Bottom Image Swiper
var swiper = new Swiper(".mySwiper3", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




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

getData()
