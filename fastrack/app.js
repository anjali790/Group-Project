// // header 
// // --------------------------------------- Header Starts Here -------------------------------- //

// var tops = document.querySelector(".top");
// var bottom = document.querySelector(".bottom");
// const watch = document.getElementById("watch");
// const audio = document.getElementById("audio");
// const eyewear = document.getElementById("eyewear");
// const bags = document.getElementById("bags");
// const perfumes = document.getElementById("perfumes");
// const offers = document.getElementById("offers");
// const watch_hover = document.getElementById("watch_hover");
// const audio_hover = document.getElementById("audio_hover");
// const bags_hover = document.getElementById("bags_hover");
// const perfumes_hover = document.getElementById("perfumes_hover");
// const offers_hover = document.getElementById("offers_hover");

// watch.addEventListener("mouseover", function () {
//   watch_hover.style.display = "flex";
//   audio_hover.style.display = "none";
//   bags_hover.style.display = "none";
//   perfumes_hover.style.display = "none";
//   offers_hover.style.display = "none";
// });

// watch_hover.addEventListener("mouseleave", function () {
//   this.style.display = "none";
// });

// audio.addEventListener("mouseover", function () {
//   watch_hover.style.display = "none";
//   audio_hover.style.display = "flex";
//   bags_hover.style.display = "none";
//   perfumes_hover.style.display = "none";
//   offers_hover.style.display = "none";
// });

// audio_hover.addEventListener("mouseleave", function () {
//   this.style.display = "none";
// });

// bags.addEventListener("mouseover", function () {
//   watch_hover.style.display = "none";
//   audio_hover.style.display = "none";
//   bags_hover.style.display = "flex";
//   perfumes_hover.style.display = "none";
//   offers_hover.style.display = "none";
// });

// bags_hover.addEventListener("mouseleave", function () {
//   this.style.display = "none";
// });

// perfumes.addEventListener("mouseover", function () {
//   watch_hover.style.display = "none";
//   audio_hover.style.display = "none";
//   bags_hover.style.display = "none";
//   perfumes_hover.style.display = "flex";
//   offers_hover.style.display = "none";
// });

// perfumes_hover.addEventListener("mouseleave", function () {
//   this.style.display = "none";
// });

// offers.addEventListener("mouseover", function () {
//   watch_hover.style.display = "none";
//   audio_hover.style.display = "none";
//   bags_hover.style.display = "none";
//   perfumes_hover.style.display = "none";
//   offers_hover.style.display = "flex";
// });

// offers_hover.addEventListener("mouseleave", function () {
//   this.style.display = "none";
// });

// // --------------------------------------- Header Ends Here -------------------------------- //

// // ---------------------------- Section on click "BRANDS" starts here ------------------------- //

// const brands = document.getElementById("brands");
// const brands_click = document.getElementById("brands_click");

// brands.addEventListener("click", function () {
//   brands_click.style.display = "block";
//   this.style.color = "white";
// });

// // ---------------------------- Section on click "BRANDS" ends here ------------------------- //

// // --------------------- Section on click "CURRENCY SELECTOR" starts here ------------------ //

// const currency = document.getElementById("currency");
// const currency_click = document.getElementById("currency_click");
// const down_icon = document.querySelector(".down");
// const up_icon = document.querySelector(".up");

// currency.addEventListener("click", function () {
//   this.style.color = "white";
//   currency_click.style.display = "block";
//   tops.style.position = "relative";
//   tops.style.top = "197px";
//   bottom.style.position = "relative";
//   bottom.style.top = "197px";
//   down_icon.style.display = "none";
//   up_icon.style.display = "inline-block";
//   up_icon.style.color = "white";
//   watch_hover.style.position = "relative";
//   watch_hover.style.top = "197px";
//   audio_hover.style.position = "relative";
//   audio_hover.style.top = "197px";
//   bags_hover.style.position = "relative";
//   bags_hover.style.top = "197px";
//   perfumes_hover.style.position = "relative";
//   perfumes_hover.style.top = "197px";
//   offers_hover.style.position = "relative";
//   offers_hover.style.top = "197px";
// });

// // ---------------------- Section on click "CURRENCY SELECTOR" ends here ------------------- //

// // ---------------------------- Section on click "LOGIN" starts here ---------------------------- //

// const login = document.getElementById("login");
// const login_click = document.getElementById("login_click");
// const signup_btn = document.querySelector(".signup_btn");
// const signup_click = document.getElementById("signup_click");
// const otpLogin = document.querySelector(".otp_login");
// const otpLoginInside = document.querySelector(".otp_login_inside");
// const otpAnchor = document.querySelector(".otp_anchor");
// const plus = document.querySelector(".plus");
// const passwordLogin = document.querySelector(".password_login");
// const passwordLoginInside = document.querySelector(".password_login_inside");
// const passwordAnchor = document.querySelector(".password_anchor");
// const plusPassword = document.querySelector(".plus_password");
// const fbLogin = document.querySelector(".fb_login");
// const fbAnchor = document.querySelector(".fb_anchor");
// const plusFb = document.querySelector(".plus_fb");
// const heading = document.querySelector(".heading");

// login.addEventListener("click", function () {
//   login_click.style.display = "block";
//   tops.style.display = "none";
//   bottom.style.display = "none";
// })

// otpLogin.addEventListener("click", function () {
//   this.style.border = "none";
//   otpLoginInside.style.display = "block";
//   otpAnchor.style.display = "none";
//   plus.style.display = "none";
//   passwordLogin.style.border = "1px solid black";
//   passwordLoginInside.style.display = "none";
//   passwordAnchor.style.display = "block";
//   plusPassword.style.display = "block";
//   fbLogin.style.border = "1px solid black";
//   fbAnchor.style.display = "block";
//   plusFb.style.display = "block";
//   heading.style.display = "none";

// })

// passwordLogin.addEventListener("click", function () {
//   this.style.border = "none";
//   passwordLoginInside.style.display = "block";
//   passwordAnchor.style.display = "none";
//   plusPassword.style.display = "none";
//   otpLogin.style.border = "1px solid black";
//   otpLoginInside.style.display = "none";
//   otpAnchor.style.display = "block";
//   plus.style.display = "block";
//   fbLogin.style.border = "1px solid black";
//   fbAnchor.style.display = "block";
//   plusFb.style.display = "block";
//   heading.style.display = "none";
// })

// fbLogin.addEventListener("click", function () {
//   this.style.border = "none";
//   fbAnchor.style.display = "none";
//   plusFb.style.display = "none";
//   heading.style.display = "block";
//   otpLogin.style.border = "1px solid black";
//   otpLoginInside.style.display = "none";
//   otpAnchor.style.display = "block";
//   plus.style.display = "block";
//   passwordLogin.style.border = "1px solid black";
//   passwordLoginInside.style.display = "none";
//   passwordAnchor.style.display = "block";
//   plusPassword.style.display = "block";
// })

// signup_btn.addEventListener("click",function () {
//   login_click.style.display = "none";
//   signup_click.style.display = "block";
// })

// // ---------------------------- Section on click "LOGIN" ends here ---------------------------- //

// // ---------------------------- Section on click "REGISTER" starts here ----------------------- //

// const registerClick = document.getElementById("register_click");
// const otpBtn = document.getElementById("otp_btn");

// otpBtn.addEventListener("click", function () {
//   registerClick.style.display = "block";
//   login_click.style.display = "none";
// })

// // ---------------------------- Section on click "REGISTER" ends here ----------------------- //







// main 
var main = document.querySelector(".watch-main-div");
var cart = [];
var data = [];
(async () => {
  let response = await fetch(`https://avish-test-api.herokuapp.com/watches`);
  let data = await response.json();
  console.log(data);

  data.map((oneData) => {
    let main = document.querySelector(".watch-main-div");
    main.innerHTML += `<div class="watch-div">
      <img src=${oneData.urlImg}>
      <div class="btn-div">
      <h2>${oneData.Name}</h2>
      <button class="addButton" onclick="add_to_cart(event)" id=${oneData.id}>Add to Cart</button>
      </div>
      </div>`;
  });
})();

async function add_to_cart(e) {
  let response = await fetch(`https://avish-test-api.herokuapp.com/watches`);
  let data = await response.json();
  console.log(e.target.id)
  let idd = e.target.id;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == idd) {
      cart.push(data[i]);
    }

  }
  let cartNumber = document.querySelector('.cart-number');
  cartNumber.innerHTML = `<sup class="cart-count">${cart.length}<sup>`
}

async function cart_button() {
  main.innerHTML = `
  <div class="cartt">
  
  </div>`

  let cart_div = document.querySelector(".cartt");
  cart.map((oneData) => {
    cart_div.innerHTML += `<div class="itemInCart">
    <div class="cart-desc-div"><img class="cartImage" src=${oneData.urlImg}></div>
    <div product-detail-div><h2 class="productName">${oneData.Name}</h2>
    <h3 class="productDescription">${oneData.description.para}</h3>
    <span class="product-mrp">MRP &#8377 <span class="item-mrp">${oneData.price}</span></span><span class="product-offerPrice"> OFFER PRICE &#8377 ${oneData.offerPrice}</span><span class="product-discount">(${oneData.discount}% Off)</span>
    <div class="product-EMI-div"><span class="product-EMI">NO COST EMI</span><span class="product-function">${oneData.function}</span></div>
    <div><button class="buy-now-btn">BUY NOW</button><button class="product-availability-btn">${oneData.availabilty}</button>
    </div>
    </div>
    
    </div>
    
    `
  });
};


// function remove_item(e){
//   let idd = e.target.id;
//   for(let i=0; i<cart.length; i++){
//     if(idd == cart[i].id){
//       if(cart[i].count ==1){
//         cart.splice(i,1);
//         // console.log("yes");
//       }else{
//         // console.log("no");
//         cart[i].count -=1;
//       }
//     }
//   }
// }

{/* <h3 class="watch_title">${oneData.description.para}</h3> */ }














// footer 
const btn = document.querySelector('.section3-know-more-btn');
const lowerDiv = document.querySelector('.section3-lowerDiv');

btn.addEventListener('click', function () {
  lowerDiv.classList.toggle("active");
});