let user = document.getElementById("user");
let cart_section = document.getElementById("items");
user.innerText = JSON.parse(localStorage.customers)[0].email.split("@")[0];
let z = JSON.parse(localStorage.getItem("cart"));
let details = document.getElementById("details");
let total = document.getElementById("total");
let net_total = document.getElementById("net_total");
let pay_btn = document.getElementById("pay");
let pay = 0;

//let z2 = JSON.parse(localStorage.getItem("customers"));
//console.log(z[0].cart.length);
//let holder = 0;
let customers = JSON.parse(localStorage.getItem("customers"));
//let Stored_Cart = JSON.parse(localStorage.getItem("cart"))

function delet(i) {
    z.splice(i, 1);
    customers[0].cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(z));
    localStorage.setItem("customers", JSON.stringify(customers))
    console.log(z, customers);
    cart_section.innerHTML = " ";

    render();
    window.location.assign("./cart.html");
}

function render() {
    for (let i = 0; i < z.length; i++) {
        cart_section.innerHTML += `<p>${z[i].name}</p>
		<p>$${z[i].price}</p><p>Quantity :${z[i].quantity}</p><button  onclick='delet(${i})'>delete</button>`;
        //if (JSON.stringify(z[i]) === JSON.stringify(Stored_Cart[x])) {
        //    //Stored_Cart.splice(x, 1);
        //    ++z[i].price.quantity;
        //    cart.push(z[i]);
        //    localStorage.setItem("cart", JSON.stringify(cart));
        //} else {
        //    cart.push(z[i]);
        //    localStorage.setItem("cart", JSON.stringify(cart));
        //}
        total.innerHTML += `<div>${z[i].name}</div>
        <div style="text-align: right;">$${z[i].price*z[i].quantity}</div>`;

        net_total.innerHTML = `<div>ORDER TOTAL :</div>
        <div style="text-align: right;">$${pay +=z[i].price}</div>`
    }
}

render();
pay_btn.addEventListener("click", function() {
    if (Notification.permission === "granted") {
        show_notification()
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") { show_notification() }
        })
    }
});

function show_notification() {
    const notification = new Notification("payment notification", {
        body: "the payment process is sucssiful "
    })
    notification.onclick = (e) => { window.location.assign("./main.html") }
}
//if (Notification.permission === "granted") {
//    show_notification()
//} else if (Notification.permission !== "denied") {
//    Notification.requestPermission().then(permission => {
//        if (permission === "granted") { show_notification() }
//    })
//}