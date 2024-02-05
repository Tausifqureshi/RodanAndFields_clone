const storedData = JSON.parse(localStorage.getItem("Data")) || [];
console.log(storedData)
  
function renderItems(productsItems){
    console.log(productsItems)
    productsItems.map(function (ele) {
      let productsDiv = document.createElement("div");
      productsDiv.classList.add("box");
      
    //   let imgDiv = document.createElement('div')
    //   imgDiv.classList.add("image")
      // Create Image
      let img = document.createElement("img");
      img.src = ele.image_url;
    //   imgDiv.append(img)
  
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
      rp.classList.add("rp")
  
      //Create Rating
      let rating = document.createElement("p");
      rating.innerText = "⭐⭐⭐⭐ 4.2 (2134)";
      rating.classList.add("itemRating");
      // Create Button
      let btn = document.createElement("button");
      btn.classList.add("itemBtn");
      btn.innerText = "ADD TO BAG";
  
      productsDiv.append(img,title, desc, price, rp, rating, btn);
      document.querySelector(".box-container").append(productsDiv);
  
      btn.addEventListener("click", () => addToCart(ele));
    });
  
  }
  renderItems(storedData)

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('CartData')) || [];
    console.log(cart)
    const isItemExist = cart.some(item => item.name === product.name);
    
    if (isItemExist) {
      alert('Product Already Added');
      window.location.href = 'cart.html';
      return;
    }
    
    cart.push(product);
    localStorage.setItem('CartData', JSON.stringify(cart));
    alert('Product Added');
  }

// See More Button   
document.addEventListener("DOMContentLoaded", () => {
    const loadMoreBtn = document.querySelector("#load-more");
    let currentItem = 3;
    const itemsPerPage = 3;
  
    loadMoreBtn.addEventListener("click", () => {
      const boxes = document.querySelectorAll("#container .box-container .box");
  
      for (let i = currentItem; i < currentItem + itemsPerPage && i < boxes.length; i++) {
        boxes[i].style.display = "inline-block";
      }
  
      currentItem += itemsPerPage;
  
    //   button none products complete:;
      if(currentItem >= boxes.length){
      loadMoreBtn.style.display = "none";
    }
    });
  
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



  














































