import {navbar} from './fp05_185/components/navbar.js';
let navbar_div=document.getElementById('navbar');
navbar_div.innerHTML=navbar();

//export footer
import {footer} from './fp05_185/components/footer.js';
let footer_div=document.getElementById('footer');
footer_div.innerHTML=footer();

var gridBox = document.getElementById('grid-container');
    gridBox.setAttribute('class', 'gridBox');
    var allThePrices = 0;
    var numberOfproducts = 0;
            var values = [];
                products = Object.keys(localStorage);
                values.push(localStorage.getItem(products[0]));
            
             var prodArr = JSON.parse(values[0]);

                prodArr.map(function (item) {
                    var prodCard = document.createElement('div');
                    prodCard.setAttribute('class', 'card');
                    var pImg = document.createElement('img');
                    pImg.setAttribute('src', item.img);
                    pImg.setAttribute('class', 'img');
                    var pName = document.createElement('h3');
                    pName.textContent = 'Name: ' + item.name;
                    pName.className = "dyn1";
                    var pPrice = document.createElement('h4');
                    pPrice.textContent = '₹' + item.price;
                    allThePrices += Number(item.price);
                    var text = document.createTextNode(item.price);
                    pPrice.className = "dyn2";
                    var btn = document.createElement('button');
                    btn.className = "dyn3";
                    btn.textContent = 'Remove';
                    prodCard.append(pImg, pName, pPrice, btn);
                    gridBox.append(prodCard);
                })

                var tag = document.createElement("p");
                var text = document.createTextNode("Total price is: ₹" + allThePrices)
                tag.appendChild(text);
                var element = document.getElementById("new");
                    element.appendChild(tag);

                // Remove cart products with button

                var removeCartItemButtons = document.getElementsByClassName("dyn3");
                
                for (var i = 0; i < removeCartItemButtons.length; i++)
                {
                    var button = removeCartItemButtons[i];
                    button.addEventListener('click', function(e) {
                        var b_clicked = e.target;
                        b_clicked.parentElement.remove();
                    })
                }

                //Remove all from cart

                var removed = document.getElementById("remove");
                removed.addEventListener('click', function()
                {
                    localStorage.removeItem('products');
                    location.reload();
                })