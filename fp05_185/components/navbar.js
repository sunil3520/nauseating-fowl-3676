const navbar=()=>{
    return `<div style="margin-bottom:-20px;"id="navbartop">
    <div class="navbartopcontent">
        <p class="navcon" style="margin-left:340px">Online Slots Availability</p>
        <p class="navcon">Fresh & Fast</p>
        <p class="navcon">Store Locator</p>
        <p class="navcon">Contact Us</p>

    </div>
    <div class="navlogin">
        <div><a  style="color:#880033;"href="login.html"><p style="text-decoration:none;">Login/Register</p></a></div>
        <div></div>

    </div>
</div>
<div style="position:relative;"class="navmiddle">
    <div><a href="homepage.html"><img src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"</a></div>
    <div class="dropdown">
        <button style="margin-bottom:4px;"class="dropbtn">Mumbai</button>
        <div class="dropdown-content">
        <p>Pune</p>
        <p>Mumbai</p>
        <p>Delhi</p>
        <p>Kolkata</p>
        <p>Thane</p>
        <p>Bengaluru</p>
        <p>Raigarh</p>
        </div>
    </div>
    <div class="dropdown1">
        <div class="navsearch"style="display:flex;margin-top:0px">
            <input  style="text-align: center;border-radius: 5px;border:2px solid #f3f3f3;padding-bottom: -130px;"type="text" id="navsearch" placeholder=""/>
            <img style="height:30px;border-radius: 3px;" src="https://www.naturesbasket.co.in/Images/search-button.jpg"/>

        </div>
        
        <div class="dropdown-content">
        <p style="text-align:center;color:#880033;">Trending Searches</p>
        <p style="text-align:center;">Organic</p>
        <p style="text-align:center;">Fresh Artisinal Breads</p>
        <p style="text-align:center;">Cold cuts and Sea food</p>
        <p style="text-align:center;">Healthy Alternatives</p>
        <p style="text-align:center;">Smoked cheese</p>
        <p style="text-align:center;">Keto-Paleo</p>
        </div>
    </div>
    <div class="navcart">
        <a href="cart.html"><i style="color:rgb(110, 198, 110);"class="fa fa-star fa_custom"></i></a>
        <!-- <a href="cart.html"><img src="https://www.naturesbasket.co.in/Images/header-icons.jpg"/></a> -->
        <a href="cart.html"><i style="font-size:24px;color:rgb(110, 198, 110);cursor: pointer;"class="fa">&#xf07a;</i></a>
    </div>
</div>
<div style="position:fixed;" class="navbottom">
    <div class="navbotdropdown">
        <button  style="background-color: #f3f3f3;"class="navbotdropbtn">SHOP BY CATEGORY<img src="https://www.naturesbasket.co.in/Images/menuicon1.png"/></button>
        <div class="navbotdropdown-content">
            <p>Gifting</p>
            <p><a href=fruits.html>Fruits and Vegetables</a></p>
            <p>Cheese meat and Fruit Platters</p>
            <p>Indian grocery</p>
            <p>Health</p>
            <p>Snack bar</p>
            <p>Breakfast,diary and Bakery</p>
            <p>Good food and cafe</p>
            <p>Snacks and Beverages</p>
        </div>
    </div>
    <div class="navbotdropdown1">
        <button class="navbotdropbtn1">MY ORDERS<img src="https://www.naturesbasket.co.in/Images/menuicon1.png"/></button>
        <div class="navbotdropdown-content1">
            <p><a href="cart.html">cart</a></p>
        </div>
    </div>
    <div class="navbotdropdown1">
        <button class="navbotdropbtn1">GIFTING</button>
    </div>
    <div class="navbotdropdown1">
        <button class="navbotdropbtn1">REWARDS</button>
    </div>
    <div class="navbotdropdown1">
        <button class="navbotdropbtn1">BLOG<img src="https://www.naturesbasket.co.in/Images/menuicon1.png"/></button>
        <div class="navbotdropdown-content1">
            <p>Recipe</p>
            <p>NBTV</p>
            <p>News</p>
            <p>Food</p>
        </div>
    </div>
    <div class="navbotdropdown1">
        <button class="navbotdropbtn1">OFFERS</button>
    </div>
    <div class="navbotdropdown">
        <button class="navbotdropbtn">CONNOISSEUR'S SELECTION<img src="https://www.naturesbasket.co.in/Images/menuicon1.png"/></button>
        <div class="navbotdropdown-content">
            <p>L'EXCLUSIF</p>
            <p>Healthy alternatives</p>
        </div>
    </div>
    <div class="navbotdropdown">
        <button class="navbotdropbtn">BOOK STORE VISIT</button>
    </div>
   

</div>`
}

export {navbar}