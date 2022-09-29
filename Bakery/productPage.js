let data = JSON.parse(localStorage.getItem("details"));

let imageContainer = document.querySelector("#image_details");

const showDetails = () => {
  imageContainer.innerHtml = null;

  let image = document.createElement("img");
  image.src = data.image;

  imageContainer.append(image);
};
showDetails();

let textContainer = document.querySelector("#name_details");
const showDetails_ = () => {
  textContainer.innerHtml = null;
  let div = document.createElement("div");
  let title = document.createElement("h3");
  title.textContent = data.name;
  let div2 = document.createElement("div");
  let p = document.createElement("p");
  p.innerText = "Share";
  let face = document.createElement("img");
  face.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJmv1N5631nJumaiI9yLF2obe1NjFDS1kBdDrLfk&s";
     face.style.cursor='pointer'
   
  let insta = document.createElement("img");
  insta.src =
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScu7LTtHEIHuUg9rxXjWNuotJEW1k_HCN6OHAXdS0&s";
     insta.style.cursor='pointer'
   let p2 = document.createElement("p");
   p2.innerText = "Product of:INDIA";
  let p3 = document.createElement("p");
  p3.innerText = "Size : 1Pc";
  let price = document.createElement("span");
  price.innerText = `MRP ${data.price}Rs `;
  let bttn = document.createElement("button");
  bttn.style.cursor = "pointer";
  bttn.innerText = "ADD";
  bttn.addEventListener("click", () => {
    let CartData = JSON.parse(localStorage.getItem("cart")) || [];
    let obj = {
      image: data.image,
      name: data.name,
      piece: data.piece,
      price: data.price,
    };
    CartData.push(obj);
    localStorage.setItem("cart", JSON.stringify(CartData));
  });
  let p4=document.createElement('p');
  p4.innerText='(Inclusive all of taxes)'
  let hr=document.createElement('hr');
  let p5=document.createElement('p');
  p5.innerText='Lorem ipsum dolor sit amet, consectetur adipisicing datait. Error officiis molestias, pariatur laboriosam iure autem fuga totam officia esse enim nesciunt. Ddataectus consequuntur repudiandae quos rerum, a aut quaerat est.'

//   div2.append(p,face,insta);
//   div.append(title,div2,p2,p3,price,bttn);
//   textContainer.append(div);
div2.append(p,face,insta)
div.append(title,div2,p2,p3,price,bttn,p4,hr,p5);

textContainer.append(div);
};
showDetails_();