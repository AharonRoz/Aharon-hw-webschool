const main=document.querySelector("main")
const arr=[
  {
    title: "Lenovo Yoga",
    price: "10$",
    image: "yoga.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium nobis corrupti dolor, assumenda ad quaerat, architecto sequi error consectetur iure expedita eaque, incidunt fugit? Recusandae qui magnam veritatis nihil!",
  },
  {
    title: "Dell XPS",
    price: "20$",
    image: "dell.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium nobis corrupti dolor, assumenda ad quaerat, architecto sequi error consectetur iure expedita eaque, incidunt fugit? Recusandae qui magnam veritatis nihil!",
  },
  {
    title: "Asus Zenbook",
    price: "30$",
    image: "asus.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium nobis corrupti dolor, assumenda ad quaerat, architecto sequi error consectetur iure expedita eaque, incidunt fugit? Recusandae qui magnam veritatis nihil!",
  },
  {
    title: "IBM ThinPad",
    price: "1000$",
    image: "ibm.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium nobis corrupti dolor, assumenda ad quaerat, architecto sequi error consectetur iure expedita eaque, incidunt fugit? Recusandae qui magnam veritatis nihil!",
  },
  {
    title: "Apple MacBook Pro",
    price: "1$",
    image: "apple.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium nobis corrupti dolor, assumenda ad quaerat, architecto sequi error consectetur iure expedita eaque, incidunt fugit? Recusandae qui magnam veritatis nihil!",
  },
  {
    title: "Samsung Chromebook",
    price: "50$",
    image: "samsung.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium nobis corrupti dolor, assumenda ad quaerat, architecto sequi error consectetur iure expedita eaque, incidunt fugit? Recusandae qui magnam veritatis nihil!",
  },
]
document.querySelector("#btn1").addEventListener("click",creat)
function creat() {
  var toAppend=""
  arr.forEach(buildCard)
  function buildCard(x, i){
    toAppend+= `
    <article class="col-4">
    <i>x</i>
    <h2>${x.title}</h2>
    <img src="assets/images/${x.image}" alt="" />
    <p>${x.description}</p>
    <h3>${x.price}</h3>
    <button>Buy Now</button>
    </article>`;
  }
  main.innerHTML=toAppend;
}

document.querySelector("#btn2").addEventListener("click",creat2)
function creat2() {
  
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var x=""+Date.now();
 var token=`${x}`
  for ( var i = 0; i < x.length; i++ ) {
    if (Math.round(Math.random()) ==0) {
    token+=x[i]
  } for ( var i = 0; i < x.length; i++ ) {
    token+= characters.charAt(Math.round(Math.random() * characters.length));}
  document.querySelector("input").value=`Your new Token is: ${token}`}
}