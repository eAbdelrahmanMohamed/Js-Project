let user = document.getElementById("user");
let cart = document.getElementById("items");
user.innerText = JSON.parse(localStorage.customers)[0].email.split("@")[0];
let z = JSON.parse(localStorage.getItem("cart"));
//let z2 = JSON.parse(localStorage.getItem("customers"));
//console.log(z[0].cart.length);
//let holder = 0;
let customers = JSON.parse(localStorage.getItem("customers"));

function delet(i) {
    z.splice(i, 1);
    customers[0].cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(z));
    localStorage.setItem("customers", JSON.stringify(customers))
    console.log(z, customers);
    cart.innerHTML = " ";
    render();
}

function render() {
    for (let i = 0; i < z.length; i++) {
        cart.innerHTML += `<p>${z[i].name}</p>
		<p>$${z[i].price}</p><button  onclick='delet(${i})'>delete</button>`;
    }
}

render();