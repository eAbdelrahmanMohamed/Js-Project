let inpObj = document.getElementById("id1");
//let pass_confirm = document.getElementById("id");

let email = document.getElementById("email");
let show = document.getElementById("show");
//let new_user = document.getElementById("new_user");

let customers = JSON.parse(localStorage.getItem("customers"));
let adn = {};
let ctr = {};
let admin = JSON.parse(localStorage.getItem("admins"))
localStorage.setItem("customers", JSON.stringify(customers));
localStorage.setItem("admins", JSON.stringify(admin));


show.addEventListener("click", function() { inpObj.type = "text" })
show.addEventListener("dblclick", function() { inpObj.type = "password" })

function myFunction() {

    if (!inpObj.checkValidity()) {
        alert(inpObj.validationMessage);
    }

    let x = validateEmail(email)

    if (inpObj.checkValidity() && x === true) {
        //pass_confirm.value = inpObj.value;
        //pass_confirm.innerText = inpObj.value;
        if (inpObj.value.includes("@admin") === true) {
            adn = {
                    email: email.value,
                    password: inpObj.value,
                }
                //admin.push(adn)
                //localStorage.setItem("admins", JSON.stringify(admin));
                //console.log(JSON.parse(localStorage.getItem("admins")));

            //window.location.assign("./admin.html");
        } else {
            ctr = {
                    email: email.value,
                    password: inpObj.value,
                    cart: JSON.parse(localStorage.getItem("cart")),

                }
                //customers.push(ctr)
                //localStorage.setItem("customers", JSON.stringify(customers));
                //console.log(JSON.parse(localStorage.getItem("customers")));
                //window.location.assign("./cart.html");
        }
    }
    for (let i = 0; i < 1; i++) {
        if (ctr === customers[i]) {
            //customers.push(ctr)
            localStorage.setItem("customers", JSON.stringify(customers))
            window.location.assign("./cart.html");

            break;
        }
        //} else {
        //    alert("this user is already Existing/n please enter new email and password")
        //}
        if (adn === admin[i]) {
            //admin.push(adn)
            localStorage.setItem("admins", JSON.stringify(admin));
            window.location.assign("./admin.html");
            break;
        }
        if (customers[i] !== ctr || adn !== admin[i]) {
            alert("this useris not found please enter a valid email& password or creat a new account");
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