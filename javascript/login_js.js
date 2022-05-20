let inpObj = document.getElementById("id1");
let redirect = document.getElementById("redirect");
redirect.addEventListener("click", function() {
    window.location.assign("./regester.html")
})

let email = document.getElementById("email");
let show = document.getElementById("show");


let temp = {}
let customers = [];
let length = localStorage.cart.length;
//localStorage.setItem("customers", JSON.stringify(customers));
customers = JSON.parse(localStorage.getItem("customers"));
let admin = [];
//localStorage.setItem("admins", JSON.stringify(admin));
admin = JSON.parse(localStorage.getItem("admins"))
let custs = [];

show.addEventListener("click", function() { inpObj.type = "text" })
show.addEventListener("dblclick", function() { inpObj.type = "password" })
var validateEmail = function(address) {
    let eml = address.value;
    var atposition = eml.indexOf("@");
    var dotposition = eml.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || address[0] === "." || address[address.length - 1] === ".") {
        alert("please enter a valid email with @ and don't end with dot");
        return false;
    } else {
        return true
    }
};

function myFunction() {

    if (!inpObj.checkValidity()) {
        alert(inpObj.validationMessage);
    }

    let x = validateEmail(email)

    if (inpObj.checkValidity() && x === true) {

        if (inpObj.value.includes("@admin") === true) {
            //adn
            temp = {
                email: email.value,
                password: inpObj.value,
            }

        } else {
            temp = {
                email: email.value,
                password: inpObj.value,
                cart: JSON.parse(localStorage.getItem("cart")),

            }

        }
    }
    if (customers[0] === undefined) {
        customers[0] = { email: "", password: 0 };
        //break;
    } else {
        custs = { email: customers[0].email, password: customers[0].password };
        console.log(custs);

    }
    let cart_except = { email: temp.email, password: temp.password }
    for (let i = 0; i < length; i++) {

        if (JSON.stringify(cart_except) === JSON.stringify(custs)) {
            //localStorage.setItem("customers", JSON.stringify(customers))
            window.location.assign("./cart.html");

            break;
        }
        if (JSON.stringify(cart_except) === JSON.stringify(admin[i])) {
            //localStorage.setItem("admins", JSON.stringify(admin));
            window.location.assign("./admin.html");
            break;
        }
        if (JSON.stringify(custs) !== JSON.stringify(cart_except) || JSON.stringify(cart_except) !== JSON.stringify(admin[i])) {
            alert("this useris not found please enter a valid email & password or creat a new account");
            break;
        }

    }
}
document.addEventListener('click', function(e) {
    e.preventDefault();
})

//var validateEmail = function(address) {


//    var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

//    var isValid = mailformat.test(address);

//    if (address != null && isValid == false) {
//        alert(email.validationMessage);
//        return false;
//    } else if (address != null && isValid == true) {
//        return true;
//    }
//};