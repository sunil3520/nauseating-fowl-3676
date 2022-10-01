
/////////////////////// SLIDESHOW////////////////////////
function SlideShowStart(){
    slides=["https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg","https://d1z88p83zuviay.cloudfront.net/BannerImages/c17da8de-f8f3-4580-a1b2-9cb1b877557a_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg","https://d1z88p83zuviay.cloudfront.net/BannerImages/fdcaf9c5-e607-40db-9ad7-e4373da72fad_1320x376.jpg","https://d1z88p83zuviay.cloudfront.net/BannerImages/9bd5bd18-3f11-4062-afe6-380ff6a35dfc_1320x376.jpg"]
let i=0
let slideContainer=document.getElementById("slideShow")
let pic=document.createElement("img")
pic.setAttribute("class","image")

setInterval(function(){
    slideContainer.innerHTML="";
    if(i==slides.length){
        i=0
    }
    pic.src=slides[i]
    slideContainer.append(pic)
    i++
},5000)

}
SlideShowStart()
/////////////////////////// SlIDESHOW//////////////////////