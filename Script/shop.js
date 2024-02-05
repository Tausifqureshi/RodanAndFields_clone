const items = JSON.parse(localStorage.getItem("allProduct"));
console.log(items);
// const container = document.querySelector("#container");
// let static =  document.querySelector(".static");

// Function to handle click event
function clickFn() {
  event.preventDefault(); // Prevent default behavior
  localStorage.setItem("CartData", JSON.stringify(items)); // Use 'allProduct' instead of undefined 'product'
  alert("Product Added");
  window.location.href = 'cart.html';
}
         
let img = document.createElement("img");
img.src = items.image_url;
document.getElementById("cover-img").append(img);

//Other Products creates;
document.querySelector("#name").textContent = items.name;
document.querySelector("#bestSeller").textContent = items.seller_type;
document.querySelector("#description").textContent = items.description;
document.querySelector("#size").textContent = items.Size;
document.querySelector("#price").textContent = `$${items.price}`;

// =======================================================//
// Modal code
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

// modal id+2
function togglePopup1() {
  document.getElementById("popup-2").classList.toggle("active1");
}

// =======================================================//
// Start According
let accordians = document.querySelectorAll(".according");
accordians.forEach((accordian) => {
  let icon = accordian.querySelector(".icon");
  //   console.log(icon)
  let answer = accordian.querySelector(".answer");
  // console.log(answer)

  accordian.addEventListener("click", () => {
    //=========================================//
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// const storedData = JSON.parse(localStorage.getItem("Data")) || {};
// console.log(storedData)

function renderProducts(products) {
  // const storedData = JSON.parse(localStorage.getItem("Data","id=1")) || {};
  // console.log(storedData);

  // Assuming products is an array of items
  products.forEach((product) => {
    let sortDiv = document.createElement("div");
    sortDiv.classList.add("sort-div");

    let sortDivImg = document.createElement("div");
    sortDivImg.classList.add("sortDivImg");

    let img = document.createElement("img");
    img.src = product.image_url;
    sortDivImg.append(img);

    let sortName = document.createElement("strong");
    sortName.innerText = product.name;
    sortName.classList.add("sortname");

    let sortRupi = document.createElement("p");
    sortRupi.innerText = `$${product.rupies}`;
    sortRupi.classList.add("sortRupi");

    let sortDescription = document.createElement("p");
    sortDescription.innerText = product.description;
    sortDescription.classList.add("sortDec");

    let sortButton = document.createElement("button");
    sortButton.innerText = "Add To Bag";
    sortButton.classList.add("sortButton");

    sortDiv.append(sortName, sortDescription, sortRupi, sortButton);
    document.querySelector("#contaner-data").append(sortDivImg, sortDiv);
  });
}

const products = [
  {
    image_url: "sort/shop-sort-img1.avif",
    name: "R+F Multi-Acid Enzyme Peel™",
    description:
      "Supercharge your routine with a resurfacer for super-even, smooth and glowing skin.",
    rupies: 100,
  },
  // Add more products as needed
];

renderProducts(products);

// Swiper
var swiper = new Swiper(".swiper", {
  // loop:true,
  slidesPerView: 1,
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// dropdown
//========================================//
//start
// let optionMenu = document.querySelector(".select-menu"),
//   selectBtn = document.querySelector(".select-btn"),
//   options = document.querySelectorAll(".option");
//   sBtnText = document.querySelector(".sbtn-text");

// selectBtn.addEventListener("click", () =>
// optionMenu.classList.toggle("active")
// );

// //select function means jo bhi slect o your select me jayge ga;
// options.forEach((option) => {
//   // console.log(option)
//   option.addEventListener("click", () => {
//     let selectOption = option.querySelector(".option-text").innerHTML;
//     // console.log(selectOption)
//     sBtnText.innerHTML= selectOption;
//     console.log(selectOption);
//   });
// });

function setupSelectMenu(selectMenu, selectBtn, options, sBtnText, optionTextClass) {
  selectBtn.addEventListener("click", () => selectMenu.classList.toggle("active"));

  options.forEach(option => {
    option.addEventListener("click", () => {
      const selectOption = option.querySelector(`.${optionTextClass}`).innerText;
      sBtnText.innerText = selectOption;
      console.log(selectOption);
    });
  });
}


// Set up the first set of elements
const optionMenu = document.querySelector(".select-menu");
const selectBtn = document.querySelector(".select-btn");
const options = document.querySelectorAll(".option");
const sBtnText = document.querySelector(".sbtn-text");

setupSelectMenu(optionMenu, selectBtn, options, sBtnText, "option-text");

// Set up the second set of elements
const optionMenu1 = document.querySelector(".select-menu1");
const selectBtn1 = document.querySelector(".select-btn1");
const options1 = document.querySelectorAll(".option1");
const sBtnText1 = document.querySelector(".sbtn-text1");

setupSelectMenu(optionMenu1, selectBtn1, options1, sBtnText1, "option-text1");






//==================================================================// 
// Reviews Sort Filter DropDown
const rating = document.querySelector(".rating");
const ratingSelect= document.querySelector(".rating-select");
// const srt_amount = document.querySelectorAll(".srt-amount");
ratingSelect.addEventListener("click",()=>{
  rating.classList.toggle("active")
})


//End According
let accordians1 = document.querySelectorAll(".according1")
accordians1.forEach(( accordian)=>{
  let icon1 = accordian.querySelector(".icon");
//   console.log(icon)
let answer1 = accordian.querySelector(".answer")
// console.log(answer)

accordian.addEventListener("click",()=>{
    // icon.classList.toggle("active")
    // answer.classList.toggle("active") //aisa bhi kar sakte hai;

    //=========================================//
    if(icon1.classList.contains('active')){
        icon1.classList.remove("active") ;  
        answer1.style.maxHeight = null;
    }else{
        icon1.classList.add("active") ;  
        answer1.style.maxHeight = answer1.scrollHeight + 'px';
    }
})


})
//======================================================================//




// //End-Get-Data-Localstorage;
const store = JSON.parse(localStorage.getItem("Data")) || {}
console.log(store)

function renderItems(productsItems){
  console.log(productsItems)
  productsItems.map(function (ele) {
    let productsDiv = document.createElement("div");
    productsDiv.setAttribute("class", "swiper-slide products-item");
    
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

    productsDiv.append( img, title, desc, price, rp, rating, btn);
    document.querySelector("#best-container").append(productsDiv);

    // btn.addEventListener("click", () => addToCart(ele));
  });

}
renderItems(store)




var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
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







































































































































