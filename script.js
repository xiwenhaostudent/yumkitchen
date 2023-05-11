let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCart = document.querySelector('.listCart')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')
const nav = document.querySelector('.nav')

openShopping.addEventListener('click', () => {
  body.classList.add('active')
  nav.style.transform = 'translateX(-100%)'
})

closeShopping.addEventListener('click', () => {
  body.classList.remove('active')
  nav.style.transform = 'translateX(0)'
})

let products = [{
  id: 1,
  name: 'PRODUCT NAME 1',
  image: '1.PNG',
  price: 120000
},
{
  id: 2,
  name: 'PRODUCT NAME 2',
  image: '2.PNG',
  price: 130000
},
{
  id: 3,
  name: 'PRODUCT NAME 3',
  image: '3.PNG',
  price: 220000
},
{
  id: 4,
  name: 'PRODUCT NAME 4',
  image: '4.PNG',
  price: 125000
},
{
  id: 5,
  name: 'PRODUCT NAME 5',
  image: '5.PNG',
  price: 150000
},
{
  id: 6,
  name: 'PRODUCT NAME 6',
  image: '6.PNG',
  price: 160000
},
{
  id: 7,
  name: 'PRODUCT NAME 7',
  image: '7.PNG',
  price: 170000
},
{
  id: 8,
  name: 'PRODUCT NAME 8',
  image: '8.PNG',
  price: 180000
}, {
  id: 9,
  name: 'PRODUCT NAME 9',
  image: '9.PNG',
  price: 190000
}
]

let listCarts = []
function initApp () {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div')
    newDiv.classList.add('item')
    newDiv.innerHTML = `
    <img src="image/${value.image}"/>
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCart(${key})">Add To Cart</button>
    `
    list.appendChild(newDiv)
  })
}
initApp()

function addToCart (key) {
  if (listCarts[key] == null) {
    listCarts[key] = products[key]
    listCarts[key].quantity = 1
  }
  reloadCart()
}

function reloadCart () {
  listCart.innerHTML = ''
  let count = 0
  let totalPrice = 0
  listCarts.forEach((value, key) => {
    totalPrice = totalPrice + value.price
    count = count + value.quantity

    if (value != null) {
      let newDiv = document.createElement('li')
      newDiv.innerHTML = `
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>${value.quantity}</div>
        <div>
          <button onclick = "changeQuantity(${key},${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick = "changeQuantity(${key},${value.quantity + 1})">+</button>
        </div>
      `
      listCart.appendChild(newDiv)
    }
  })
  total.innerText = totalPrice.toLocaleString()
  quantity.innerText = count
}

function changeQuantity (key, quantity) {
  if (quantity == 0) {
    delete listCarts[key]
  } else {
    listCarts[key].quantity = quantity
    listCarts[key].price = quantity * products[key].price
  }
  reloadCart()
}

// Popup function
function openPopup (popupId) {
  document.getElementById(popupId).style.display = "block"
}

function closePopup (popupId) {
  document.getElementById(popupId).style.display = "none"
}


