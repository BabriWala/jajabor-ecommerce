// Fetch All Products
// let products;
const productsContainer = document.getElementById("products-container");

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(products => {
  console.log(products);
  const productItems = products.map((product) => {
    // console.log(product.rating.count)
    const productItemHTML = `
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a
        href="product_details.html?productId=${product.id}"
        class="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
          src="${product.image}"
        />
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          ${product.category}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">
          ${product.title}
        </h2>
        <p class="mt-1">${product.price}</p>
      </div>
    </div>
    `;
    return productItemHTML;
  });
  // console.log(productItems);
  // console.log(typeof productItems);
  const productsHTML = productItems.join(" ");
  console.log(productsHTML)
  productsContainer.innerHTML = productsHTML;
})



// Hamburger Menu
const hambuergerBtn = document.getElementById("hamburger-menu");
const mobileNavbar = document.getElementById("mobile-navbar");
const clostBtn = document.getElementById("close-btn");

// hambuergerBtn.addEventListener("click", function () {
//   // console.log("the hambergerbtn is clicked")
//   console.log(mobileNavbar.classList);
//   mobileNavbar.classList.remove("hidden")
//   mobileNavbar.classList.add("flex")
//   hambuergerBtn.classList.add("hidden")
//   clostBtn.classList.remove("hidden")
//   console.log(mobileNavbar.classList)
// });
hambuergerBtn.addEventListener("click", function () {
  // console.log("the hambergerbtn is clicked")
  mobileNavbar.classList.toggle("hidden");
  mobileNavbar.classList.toggle("flex");
});



clostBtn.addEventListener("click", function () {
  mobileNavbar.classList.add("hidden");
  mobileNavbar.classList.remove("flex");

  clostBtn.classList.add("hidden");
  hambuergerBtn.classList.add("block");
  hambuergerBtn.classList.remove("hidden");
});

// Hamburger Closed

const shopBtn1 = document.querySelector(".shop-btn-1");
// console.log(shopBtn1);
shopBtn1.addEventListener("click", function () {
  // console.log("This shop button is clicked");
  window.location.href = "http://127.0.0.1:5500/shop.html";
});

const firstSlide = document.getElementById("first-slide");
const secondSlide = document.querySelector("#second-slide");
const thirdSlide = document.getElementById("third-slide");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

firstSlide.style.display = "flex";
secondSlide.style.display = "none";
thirdSlide.style.display = "none";

prevBtn.addEventListener("click", function () {
  const isFirstSlideActive = getComputedStyle(firstSlide).display == "flex";
  const isSecondSlideActive = getComputedStyle(secondSlide).display == "flex";
  const isThirdSlideActive = getComputedStyle(thirdSlide).display == "flex";
  if (isFirstSlideActive) {
    firstSlide.style.display = "none";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "flex";
  } else if (isThirdSlideActive) {
    thirdSlide.style.display = "none";
    secondSlide.style.display = "flex";
    firstSlide.style.display = "none";
  } else if (isSecondSlideActive) {
    secondSlide.style.display = "none";
    firstSlide.style.display = "flex";
    thirdSlide.style.display = "none";
  }
});
nextBtn.addEventListener("click", function () {
  if (getComputedStyle(firstSlide).display == "flex") {
    firstSlide.style.display = "none";
    thirdSlide.style.display = "none";
    secondSlide.style.display = "flex";
  } else if (getComputedStyle(secondSlide).display == "flex") {
    secondSlide.style.display = "none";
    firstSlide.style.display = "none";
    thirdSlide.style.display = "flex";
  } else if (getComputedStyle(thirdSlide).display == "flex") {
    secondSlide.style.display = "none";
    thirdSlide.style.display = "none";
    firstSlide.style.display = "flex";
  }
});
