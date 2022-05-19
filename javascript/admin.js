function delet(i) {


    let StoredProducts = JSON.parse(localStorage.getItem("products"));
    StoredProducts.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(StoredProducts));
    StoredProducts = JSON.parse(localStorage.getItem("products"));

    console.log(StoredProducts);
    document.getElementById("view").innerHTML = " ";
    displayProducts(StoredProducts);
}


function displayProducts(StoredProducts) {

    StoredProducts = JSON.parse(localStorage.getItem("products"));

    for (let i = 0; i < StoredProducts.length; i++) {
        document.getElementById("view").innerHTML +=

            `<div id=${StoredProducts[i].id} class='card'>
      <div class="img-box flex-align-center justify-center" >
        <img src=${StoredProducts[i].img} alt=${StoredProducts[i].name} onclick='Update(${i},"img-box")' />
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
          <h6 class='item-price' onclick='Update(${i},"item-price")'>$${StoredProducts[i].price}</h6>

        </div>
		<div id="edit"><input type="number" id="input"></br><button id="ok">ok</button></div>

        <h6 class='item-name' onclick='Update(${i},"item-name")'>
         ${StoredProducts[i].name}--${StoredProducts[i].brand}
           
        </h6>
        <p class='item-description' onclick='Update(${i},"item-description")'>${StoredProducts[i].description}</p>
      </div>
      <div class='item-options flex-align-center'>
        <div class="list-price-wrapper">
          <div class="item-cost">
          </div>
        </div>
        <a class='btn-wishlist flex-align-center gap-1' href='#' onclick='delet(${i})'>
          <span>delete</span>
        </a>
       
      </div>
    </div>`;

    }
}

function Update(x, cls) {
    let z = " ";
    let okbtn = document.getElementById("ok");
    let input = document.getElementById("input");
    switch (cls) {
        case cls = "item-price":
            z = document.querySelectorAll("." + cls)[x];
            input.type = "number";
            okbtn.innerText = "enter new price";
            //alert("class item price");
            break;
        case cls = "img-box":
            z = document.querySelectorAll("." + cls)[x];
            input.type = "text";
            okbtn.innerText = "enter new img url";

            //alert("class img box");
            break;
        case cls = "item-rating":
            z = document.querySelectorAll("." + cls)[x];
            okbtn.innerText = "enter new rate";
            okbtn.style.marginTop = "3%";
            input.type = "range";
            input.innerHTML = `<input type="range" max="5" min="1">`

            //alert("class item-wrapper");
            break;
        case cls = "item-name":
            z = document.querySelectorAll("." + cls)[x];
            okbtn.innerText = "enter new name";
            input.type = "text";

            //alert("class item-name");
            break;
        case cls = "item-description":
            z = document.querySelectorAll("." + cls)[x];
            okbtn.innerText = "enter new description		";
            input.type = "text";
            //alert("class item-description");
            break;
        default:
            alert("nothing");


    }
    z.addEventListener("click", function() {
        document.getElementById("edit").style.display = "flex";
    })
    okbtn.addEventListener("click", function() {

        let t = input.value;
        let StoredProducts = " ";
        //document.querySelectorAll("." + cls)[x].innerHTML = `<h6 class='item-price' onclick='Update(${x})'>$${t}</h6>`;
        switch (cls) {
            case cls = "item-price":
                StoredProducts = JSON.parse(localStorage.getItem("products"));
                StoredProducts[x].price = t;
                localStorage.setItem("products", JSON.stringify(StoredProducts));
                z = document.querySelectorAll("." + cls)[x];
                z.innerHTML = `<h6 class='item-price' onclick='Update(${x},"item-price")'>$${t}</h6>`
                    //alert("class item price");
                break;
            case cls = "img-box":
                StoredProducts = JSON.parse(localStorage.getItem("products"));
                StoredProducts[x].img = t;
                localStorage.setItem("products", JSON.stringify(StoredProducts));
                z = document.querySelectorAll("." + cls)[x];
                z.innerHTML = `<img class='img-box' src=${t} alt=${t} onclick='Update(${x},"img-box")'/>`
                    //alert("class img box");
                break;
            case cls = "item-rating":
                StoredProducts = JSON.parse(localStorage.getItem("products"));
                StoredProducts[x].rate = t;
                localStorage.setItem("products", JSON.stringify(StoredProducts));
                z = document.querySelectorAll("." + cls)[x];
                z.innerHTML = `<div class='item-rating' onclick='Update(${x},"item-rating")'>
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
					t > 0 ? 'warning' : 'muted'
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
					t > 1 ? 'warning' : 'muted'
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
					t > 2 ? 'warning' : 'muted'
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
					t > 3 ? 'warning' : 'muted'
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
					t > 4 ? 'warning' : 'muted'
				  } g feather feather-star'
				>
				  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
				</svg>
			  </div>`
                    //alert("class item-wrapper");
                break;
            case cls = "item-name":
                StoredProducts = JSON.parse(localStorage.getItem("products"));
                StoredProducts[x].name = t;
                localStorage.setItem("products", JSON.stringify(StoredProducts));
                z = document.querySelectorAll("." + cls)[x];
                z.innerHTML = `<h6 class='item-name' onclick='Update(${x},"item-name")'>
				${t}
			   </h6>`

                //alert("class item-name");
                break;
            case cls = "item-description":
                StoredProducts = JSON.parse(localStorage.getItem("products"));
                StoredProducts[x].description = t;
                localStorage.setItem("products", JSON.stringify(StoredProducts));
                z = document.querySelectorAll("." + cls)[x];
                z.innerHTML = `<p class='item-description' onclick='Update(${x},"item-description")'>${t}</p>`
                    //alert("class item-description");
                break;
            default:
                alert("nothing");


        }
        document.getElementById("edit").style.display = "none";


    });
}

let additem = document.getElementById("additem");
additem.addEventListener("click", function() {
    document.getElementById("over").style.visibility = "visible";
});
////////////////////////////////////////////////////////////////////////////
let close = document.getElementById("close");
close.addEventListener("click", function() {
    document.getElementById("over").style.visibility = "hidden";
});
/////////////////////////////////////////////////////////////
let photo = document.getElementById("photo");
let Name = document.getElementById("name");
let Price = document.getElementById("price");
let Rate = document.getElementById("range");
let discription = document.getElementById("discp");
let add = document.getElementById("add");
let counter = 27;

add.addEventListener("click", function(IMG, NAME, PRICE, RATE, DIS) {
    IMG = photo.value;
    NAME = Name.value;
    PRICE = Price.value;
    RATE = Rate.value;
    DIS = discription.value;
    let newitem = { id: ++counter, name: NAME, price: PRICE, rate: RATE, img: IMG, discription: DIS, };
    let StoredProducts = JSON.parse(localStorage.getItem("products"));
    //products.push(newitem);
    StoredProducts.push(newitem);
    //localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("products", JSON.stringify(StoredProducts))
    document.getElementById("view").innerHTML +=

        `
<div class="img-box flex-align-center justify-center">
<img src=${IMG} alt=${NAME} />
</div>
<div class='card-body'>
<div class='item-wrapper flex-align-center justify-between'>
  <div class='item-rating'>
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
		RATE > 0 ? 'warning' : 'muted'
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
		RATE > 1 ? 'warning' : 'muted'
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
	RATE > 2 ? 'warning' : 'muted'
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
		RATE > 3 ? 'warning' : 'muted'
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
		RATE > 4 ? 'warning' : 'muted'
	  } g feather feather-star'
	>
	  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
	</svg>
  </div>
  <h6 class='item-price'>$${PRICE}</h6>
</div>
<h6 class='item-name'>
 ${NAME}

</h6>
<p class='item-description'>${DIS}</p>
</div>
<div class='item-options flex-align-center'>
<div class="list-price-wrapper">
  <div class="item-cost">
  </div>
</div>
<a class='btn-wishlist flex-align-center gap-1' href='#'>
  <span>delete</span>
</a>

</div>
</div>`;

    document.getElementById("over").style.visibility = "hidden";
    displayProducts(StoredProducts);

})
displayProducts(JSON.parse(localStorage.getItem("products")));