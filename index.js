
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

///////////////////////////////////////// PRODUCT DATA////////////////////////////////////////
trendPro= [{name:"HA TAPIOCA FLOUR 400G",qty:1,MRP:"210$",img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"},
{name:"Kwality Wall's Ice Cream - Magnum C..",qty:1,MRP:"1$",img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg"},
    {name:"HA ORGANIC MOONG DAL YELLOW SPLIT 500G",qty:1,MRP:"149$",img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/120d587f-37c9-4743-bc37-2cbb7bd57025_425x425.jpg"}, {name:"HA TAPIOCA FLOUR 400G",qty:1,MRP:"210$",img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"}]
    let appendContainer=document.querySelector(".pro")
    trendPro.forEach(function(e,id){
        let parent=document.createElement("div");
        parent.setAttribute("class","parent")
        let photo=document.createElement("img");
        photo.src=e.img
        let title=document.createElement("h5");
        title.innerText=e.name
        let qnty=document.createElement("h6");
        qnty.innerText=`${"Quantity"}`+" "+e.qty
        let pButton=document.createElement("button")
        pButton.setAttribute("classs","pButton");
        pButton.innerText="Price"+" "+e.MRP
        
        parent.append(photo,title,qnty,pButton)
        appendContainer.append(parent)
    })