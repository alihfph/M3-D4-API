 let  booksCart = []
 let shoppingCart = []
const returnDatA = (data)=>{
  return ` <div class="col">
  <div class="card" style="width: 20rem;">
<img class="card-img-top" src="${data.img}" alt="Card image cap">
<div class="card-block">
<h4 class="card-title">${data.title}</h4>
<p class="card-text">${data.price}</p>
<button id="${data.asin}"  class="add-to-cart btn btn-primary">Add to cart</button>
</div>
</div>
</div>`
}

const creatcards =()=>{
  const container = document.querySelector(".insertcard")
  container.innerHTML =""
  booksCart.forEach((data)=>{
    container.innerHTML+=returnDatA(data); 
  })
  // const buttons = document.querySelectorAll(".add-to-cart")
  // buttons.forEach(button=>{
  //   button.onclick=onAddCart
  // })
  
}

function onAddCart(e){
  const id = e.target.id;
  const book = booksCart.find(book=>book.asin===id)
  shoppingCart.push(book)
}
window.onload = function() {
    fetch("https://striveschool-api.herokuapp.com/books").then(response=> response.json()).then(body=> booksCart=body).catch(err=> console.log(err))
 }
  
//  window.addEventListener('DOMContentLoaded', async () => {
//   try {
//     const res = await fetch('https://striveschool-api.herokuapp.com/books');
//     const data = await res.json();
//     booksCart = [...data];
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }); 
