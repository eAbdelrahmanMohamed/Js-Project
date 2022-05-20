let inpObj = document.getElementById("id1");
let pass_confirm = document.getElementById("id");
let email = document.getElementById("email");
let show = document.getElementById("show");
let new_user = document.getElementById("new_user")
let customers = [];
let adn = {};
let ctr = {};
let admin = []
show.addEventListener("click", function() { inpObj.type = "text" })
show.addEventListener("dblclick", function() { inpObj.type = "password" })

document.addEventListener('click', function(e) {
    e.preventDefault();
})
pass_confirm.addEventListener("click", function() {

    pass_confirm.value = inpObj.value;
    pass_confirm.innerText = inpObj.value;
})
localStorage.setItem("customers", JSON.stringify(customers));
localStorage.setItem("admins", JSON.stringify(admin));

function myFunction() {
    if (!inpObj.checkValidity()) {
        alert(inpObj.validationMessage);
    }

    let x = validateEmail(email)

    if (inpObj.checkValidity() && x === true) {

        if (inpObj.value.includes("@admin") === true) {
            return adn = {
                email: email.value,
                password: inpObj.value,
            };
        } else {
            return ctr = {
                email: email.value,
                password: inpObj.value,
                cart: JSON.parse(localStorage.getItem("cart")),

            }

        }
    }
}
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
new_user.addEventListener("click", function() {
    let holder = myFunction();
    let get_Cus = JSON.parse(localStorage.getItem("customers"));
    let get_adn = JSON.parse(localStorage.getItem("admins"));

    for (let i = 0; i < 10; i++) {
        if (holder.password.includes("@admin") == false) {
            if (holder !== get_Cus[i]) {
                get_Cus.push(holder)
                localStorage.setItem("customers", JSON.stringify(get_Cus))
                window.location.assign("./login.html");

            }
            break;

        }

        if (holder.password.includes("@admin") == true) {
            if (holder !== get_adn[i]) {
                get_adn.push(holder)
                localStorage.setItem("admins", JSON.stringify(get_adn));
                window.location.assign("./login.html");
            }
            break;

        }
        if (JSON.parse(get_Cus[i]) === JSON.parse(holder) || JSON.parse(holder) === JSON.parse(get_adn[i])) {
            alert("this user is already Existing/n please enter new email and password");
            break;
        }
        if (pass_confirm.value !== inpObj.value) {
            alert("please enter same password or click on confirmation field to insert a copy");
            break;
        }
        //switch (holder.password) {
        //    case holder.password.includes("@admin" == false):
        //        if (get_Cus[i] !== holder) {
        //            get_Cus.push(holder)
        //            localStorage.setItem("customers", JSON.stringify(get_Cus))
        //            window.location.assign("./cart.html");
        //        }
        //        break;
        //    case holder.password.includes("@admin") == true:
        //        if (get_adn[i] !== holder) {
        //            get_adn.push(holder)
        //            localStorage.setItem("admins", JSON.stringify(get_adn))
        //            window.location.assign("./admin.html");
        //        }
        //        break;
        //    case get_Cus[i] === holder || holder === get_adn[i]:
        //        alert("this user is already Existing/n please enter new email and password");
        //}
    }

})