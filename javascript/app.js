feather.replace();

const gridContainer = document.querySelector('.grid');
const searchInput = document.querySelector('#search');
const multiRangeInputs = document.querySelectorAll('input[name="multi-range"]');
const brandsInputs = document.querySelectorAll('input[name="brands"]');
const categoriesInputs = document.querySelectorAll('input[name="categories"]');
const menubarActive = document.querySelector('.menubar__item--active');
const dropDownList = document.querySelector('.menubar__drop-list');
const scrollToTop = document.getElementById('toTopBtn');
const mobileNav = document.querySelector('.menu-navbar');
const menuBar = document.querySelector('.menubar');
const closeIcon = document.querySelector('.close-icon');
const listViewBtns = document.querySelectorAll('.option-view');
const listViewBtnsLabel = document.querySelectorAll('.list-view-label');
const overlay = document.querySelector('.overlay');
const featuredBtn = document.querySelector('.featured-btn');
const featuredDropdown = document.querySelector('.featured-dropdown');
const featuredSortBtn = document.querySelector('.featured-sort');
const lowestSortBtn = document.querySelector('.lowest-sort');
const highestSortBtn = document.querySelector('.highest-sort');
const featuredTextValue = document.querySelector('.featured-text');
window.addEventListener('DOMContentLoaded', displayProducts);
let Quantity = 1;
let cart = [];
localStorage.setItem("cart", JSON.stringify(cart));
console.log(JSON.parse(localStorage.getItem("cart")))

//////////////////////////////////////////////////////////////////////////////////////

let StoredProducts = JSON.parse(localStorage.getItem("products"));

function displayProducts(StoredProducts) {

    StoredProducts = JSON.parse(localStorage.getItem("products"));

    for (let i = 0; i < StoredProducts.length; i++) {
        gridContainer.innerHTML +=

            `<div id=${StoredProducts[i].id} class='card'>
      <div class="img-box flex-align-center justify-center" >
        <img src=${StoredProducts[i].img} alt=${StoredProducts[i].name} ' />
      </div>
      <div class='card-body'>
        <div class='item-wrapper flex-align-center justify-between'>
          <div class='item-rating' onclick='Update(${i},"item-rating")'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='${
                StoredProducts[i].rating > 0 ? 'warning' : 'muted'
              } feather feather-star'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
              <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='${
				StoredProducts[i].rating > 1 ? 'warning' : 'muted'
              }  feather feather-star'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
              <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='${
                StoredProducts[i].rating > 2 ? 'warning' : 'muted'
              }  feather feather-star'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
                        <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='${
				StoredProducts[i].rating > 3 ? 'warning' : 'muted'
              }  feather feather-star'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='${
                StoredProducts[i].rating > 4 ? 'warning' : 'muted'
              } g feather feather-star'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
          </div>
          <h6 class='item-price'>$${StoredProducts[i].price}</h6>
        </div>
        <h6 class='item-name'>
                <a class="item-name-link" href="#">${StoredProducts[i].name}</a>
                <p class="item-name-brand">by
                   <a href="#">${StoredProducts[i].brand}</a>
                </p>
           </h6>
        <p class='item-description'>${StoredProducts[i].description}</p>
      </div>
      <div class='item-options flex-align-center'>
        <div class="list-price-wrapper">
          <div class="item-cost">
          <h4 class="item-list-price">$${StoredProducts[i].price}</h4>
          </div>
        </div>
        <a class='btn-wishlist flex-align-center gap-1' href='#'>
                 <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-heart"><path data-v-15eba8c6="" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                 <span>Wishlist</span>
               </a>
               <a class='${StoredProducts[i].class} btn-cart flex-align-center gap-1' onclick='AddToCart("${StoredProducts[i].id}","${StoredProducts[i].name}",${StoredProducts[i].price},${Quantity})'>
                 <svg data-v-15eba8c6="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-50 feather feather-shopping-cart"><circle data-v-15eba8c6="" cx="9" cy="21" r="1"></circle><circle data-v-15eba8c6="" cx="20" cy="21" r="1"></circle><path data-v-15eba8c6="" d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                 <span>add to Cart</span>
               </a>
       
      </div>
    </div>`;

    }
}


let Stored_Cart = JSON.parse(localStorage.getItem("cart"))
let temp = 0;

function AddToCart(id, name, price, Quantity) {
    let test = {
        id: id,
        name: name,
        price: price,
        quantity: Quantity,
    };
    //console.log(test)

    for (let x = 0; x < Stored_Cart.length; x++) {
        if (JSON.stringify(test) === JSON.stringify(Stored_Cart[x])) {
            //Stored_Cart.splice(x, 1);
            ++test.quantity;
            cart.push(test);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        //else {
        //    cart.push(test);
        //    localStorage.setItem("cart", JSON.stringify(cart));
        //}
        //cart.push(test);
        //localStorage.setItem("cart", JSON.stringify(cart));
        //document.querySelector(".nav__item.cart").innerHTML = cart.length;
    }
    cart.push(test);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.querySelector(".nav__item.cart").innerHTML = cart.length;

}
//for (let x = 0; x < Stored_Cart.length + 1; x++) {
//    if (JSON.stringify(Stored_Cart[x]) === JSON.stringify(Stored_Cart[x + 1])) {
//        //Stored_Cart.splice(x, 1);
//        ++temp;
//        cart.push(Stored_Cart[x + 1]);
//        localStorage.setItem("cart", JSON.stringify(cart));
//    } else {
//        cart.push(Stored_Cart[x]);
//        localStorage.setItem("cart", JSON.stringify(cart));
//    }
//console.log(JSON.parse(localStorage.getItem("cart")));
//    //window.location.assign('./cart.html')

//}
document.querySelector(".nav__item.cart").addEventListener("click", function() {
        window.location.assign('./login.html');

    })
    //})