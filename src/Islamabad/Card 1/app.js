let cart = document.getElementById("carts")
let total = document.getElementById("enterNum")
let removePhoto = document.getElementById("photo123")

let foodItems = [
    {
        id: 1,
        img: "https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.jpg?s=612x612&w=0&k=20&c=tBMCVZt7CW0KRBqkRg-MDySzxMiQqzUamGU9IHnH13Q=",
        productName: "Chicken Biryani",
        productPrice: 280,
    },
    {
        id: 2,
        img: "https://sugaries.com.pk/wp-content/uploads/2022/08/sandwich-platter.jpg",
        productName: "Sandwich Platter",
        productPrice: 6400,
    },
    {
        id: 3,
        img: "https://butfirstchai.com/wp-content/uploads/2023/03/chicken-tikka-skewers-recipe.jpg",
        productName: "Chicken Tikka",
        productPrice: 580,
    },
]

let cartItems = {}

function addToCart(productId) {
    let selectedItem = null
    for (let i = 0; i < foodItems.length; i++) {
        if (foodItems[i].id === productId) {
            selectedItem = foodItems[i]
            break
        }
    }


    if (cartItems[selectedItem.id]) {
        cartItems[selectedItem.id].quantity += 1
        cartItems[selectedItem.id].totalPrice += selectedItem.productPrice
        
        let productDiv = document.getElementById(`cart-item-${selectedItem.id}`)
        productDiv.querySelector(".price").innerText = `Price: ${cartItems[selectedItem.id].totalPrice}`
        productDiv.querySelector(".quantity").innerText = `Quantity: ${cartItems[selectedItem.id].quantity}`
    } else {
        cartItems[selectedItem.id] = {
            quantity: 1,
            totalPrice: selectedItem.productPrice,
        }

        let cartItemDiv = document.createElement("div")
        cartItemDiv.classList.add("cart23")
        cartItemDiv.id = `cart-item-${selectedItem.id}`
        cartItemDiv.innerHTML = `
            <img src="${selectedItem.img}" width="50%">
            <p>Product Name: ${selectedItem.productName}</p>
            <p class="quantity">Quantity: 1</p>
            <p class="price">Price: ${selectedItem.productPrice}</p>
        `
        cart.appendChild(cartItemDiv)
    }

    let totalPrice = 0
    for (let key in cartItems) {
        totalPrice += cartItems[key].totalPrice
    }
    total.innerText = `Total: ${totalPrice}`
}