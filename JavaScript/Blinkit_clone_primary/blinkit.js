const products = [
    {
        name: "Fresh Apples",
        price: 120,
        quantity:"1 kg",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop"

    },

    {
        name: "Milk",
        price: 35,
        quantity: "500ml",
        image: "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?q=80&w=400&auto=format&fit=crop"

    },

    {
        name: "Potato Chips",
        price: 50,
        quantity: "200g",
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=400&auto=format&fit=crop"

    }
];



const cart = [];

const cartItemsContainer = document.querySelector(".cart-items");


const cartButton = document.querySelector(".cart-btn");
const cartSidebar = document.querySelector(".cart-sidebar");
console.log("cartSidebar");

cartButton.addEventListener("click", function(){
    console.log("Before:", cartSidebar.className);
    cartSidebar.classList.toggle("hidden");
    console.log("After:", cartSidebar.className);
});




const productsContainer = document.querySelector(".products");


products.forEach(function(product, index){
    console.log(index, product.name);
    productsContainer.innerHTML += `
        <div class="product-card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.quantity}</p>
            <div class="product-bottom">
            
                <span>₹${product.price}</span>
                <button class="add-btn" data-index ="${index}">
                    Add
                </button>
                
            </div>
            
        </div> 
        
        
        `;
        
});

const addButtons = 
document.querySelectorAll(".add-btn");

addButtons.forEach(function(button){
    button.addEventListener("click", function(){
        const productIndex = button.dataset.index;
        const clickedProduct = products[productIndex];

        const existingItem = cart.find(function(item){
            return item.name === clickedProduct.name;
        });

        if(existingItem){
            existingItem.cartQuantity++;
        
        }
        else{
            cart.push({
                ...clickedProduct,
                cartQuantity:1
            });
        }
        console.log(cart);

        updateCartCount();
        displayCart();
    });
});

const cartCount = document.getElementById("cart-count");

function updateCartCount(){
    let totalItems = 0;
    
    cart.forEach(function(item){
        totalItems += item.cartQuantity;
    });

    cartCount.innerText =totalItems;
}

function displayCart(){
    cartItemsContainer.innerHTML = "";

    let totalPrice = 0;

    cart.forEach(function(item){

        totalPrice += item.price * item.cartQuantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <h4>${item.name}</h4>
                <p>Price:₹${item.price}</p>
                <p>Quantity: ${item.cartQuantity}</p>
                <p>Total: ₹${item.price* item.cartQuantity}</p>

                <button class="decrease-btn" data-name="${item.name}">
                    -
                </button>

                <button class="increase-btn" data-name="${item.name}">
                    +
                </button>

                <button class="remove-btn" data-name="${item.name}">
                    Remove
                </button>
                
            </div>

        `;
    });

    cartItemsContainer.innerHTML += `
        <h3>Total: ₹${totalPrice}</h3>
    `;

    const removeButtons = document.querySelectorAll(".remove-btn");
    const decreaseButtons = document.querySelectorAll(".decrease-btn");
    const increaseButtons = document.querySelectorAll(".increase-btn");

    removeButtons.forEach(function(button){
        button.addEventListener("click", function(){
            const productName = button.dataset.name;
            const itemIndex = cart.findIndex(function(item){
                return item.name === productName;
            });
            cart.splice(itemIndex, 1);

            updateCartCount();
            displayCart();
        });
    });

    decreaseButtons.forEach(function(button){
        button.addEventListener("click",function(){
            const productName = button.dataset.name;
            const itemIndex = cart.findIndex(function(item){
                return item.name === productName;
            });
            if(cart[itemIndex].cartQuantity > 1){
                cart[itemIndex].cartQuantity--;

            }
            else{
                cart.splice(itemIndex, 1);
            }

            updateCartCount();
            displayCart();
        });
    });

    increaseButtons.forEach(function(button){
        button.addEventListener("click",function(){
            const productName = button.dataset.name;
            const itemIndex = cart.findIndex(function(item){
                return item.name === productName;

            });
            cart[itemIndex].cartQuantity++;

            updateCartCount();
            displayCart();
        });
    });

}