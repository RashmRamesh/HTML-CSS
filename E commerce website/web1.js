const addcart=document.querySelector('#p1');
const cart=document.querySelector('#badge');




// let openshopping=document.querySelector('#badge');
// let closeshopping=document.querySelector('.closeshopping');
// let list=document.querySelector('.list');
// let listcard=document.querySelector('.listcard');
// let body=document.querySelector('body');
// let total=document.querySelector('.total');
// let quantity=document.querySelector('.quantity');


// openshopping.addEventListener('click',()=>{
//     body.classList.add('active');
// })

// closeshopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// let products=[
//     {
//         id:1,
//         name:"Tomato",
//         image:"tomatoes-320860_1280.jpg",
//         price:40
//     },
//     {
//         id:2,
//         name:"Apple",
//         image:'apple.jpg',
//         price:120
//     },
//     {
//         id:3,
//         name:"Eggs",
//         image:"pexels-polina-tankilevitch-4110226.jpg",
//         price:72
//     },
//     {
//         id:4,
//         name:"Pork Belly",
//         image:"pork-belly-1122171_1280.jpg",
//         price:400
//     },
//     {
//         id:5,
//         name:"Milk",
//         image:"milk-1887234_1280.jpg",
//         price:20
//     },
//     {
//         id:6,
//         name:"Butter",
//         image:"butter.jpg",
//         price:60
//     },
//     {
//         id:7,
//         name:"Bread",
//         image:"bread.jpg",
//         price:20
//     },
//     {
//         id:8,
//         name:"Banana",
//         image:"banana.jpg",
//         price:60
//     },
//     {
//         id:9,
//         name:"chocolates",
//         image:"cake-pops-693645_1280.jpg",
//         price:40
//     } 
// ];

// let listcards = [];
// function initapp(){
//     products.forEach((value,key)=>{
//         let newDiv=document.createElement('div');
//         newDiv.innerHTML=`
//         <img src="image/${value.image}"/>
//         <div class="title">${value.name}</div
//         <div class="price">${value.price.toLocaleString()}</div>
//         <button onclick="addToCard(${key})>Add to Cart</button>
//         `;
//         list.appendChild(newDiv);
//     })
// }
// initapp();
// function addToCard(key){
//     if(listCards[key]==null){
//         listCards[key]=products[key];
//         listCards[key].quantity=1;
//     }
//     reloadCard();
// }

// function reloadCard(){
//     listcard.innerHTML='';
//     let count=0;
//     let totalprice=0;
//     listcards.forEach((valu,key)=>{
//         totalprice = totalprice + value.price;
//         count=count+value.quantity;

//         if(value!= null)
//         {
//             let newDiv=document.createElement('li');
//             newDiv.innerHTML=`
            
//             `;
//         }
//     })
// }










let cart1=0;
addcart.addEventListener('click', () =>{
    // alert('hjbj');
    cart1++;
    cart.textContent= cart1

})

// let cart1 = 0;
// const counter = ()=>{
//     cart1++;
//     cart.innerText = cart1;
// };

// alert("hiiii");