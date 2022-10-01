//import navbar
import {navbar} from './fp05_185/components/navbar.js';
let navbar_div=document.getElementById('navbar');
navbar_div.innerHTML=navbar();

//payment function
function payment() {
    let parent = document.getElementById("all");

    parent.innerHTML = null;

    setTimeout(function (el) {
        let h1 = document.createElement("h1");
        h1.setAttribute("class", "thank");
        let h3 = document.createElement("h3");
        h3.setAttribute("class", "msg");
        let h3s = document.createElement("h3");
        h3.setAttribute("class", "msg");

        h1.textContent = "Thank you for shopping with Nature's Basket!";

        h3.textContent = "Have a great day!";
        h3s.textContent =
            "Order Id: #" + Math.floor(100000 + Math.random() * 900000);

        parent.append(h1, h3, h3s);

        localStorage.removeItem("cart");
    }, 2000);
}
