const product = [
    {
        name:"Apple",
        price: "50₹",
        quantity : "1kg",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop"
    },

    {
        name:"Milk",
        price:"35₹",
        quantity:"500ml",
         image: "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?q=80&w=400&auto=format&fit=crop"
    },

    {
        name:"Potato Chips",
        price:"120₹",
        quantity:"200g",
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=400&auto=format&fit=crop"
    }
];

const cart = [];

const cartItemsContainer = document.querySelector(".cart-items");
const cartButton = document.querySelector(".cart-btn");
const cartSidebar = document.querySelector(".cart-sidebar");
console.log(cartSidebar);

cartButton.addEventListener("click", function(){
    console.log("Before :",cartSidebar.className);
    cartSidebar.classList.toggle("hidden");
    console.log("After :",cartSidebar.className);
})

const productsContainer = document.querySelector(".products");

product.forEach(function(product, index){
    console.log(product, index.name);
    productsContainer.innerHTML += `
        <div class=product-card>
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.quantity}</p>
            <div class=product-bottom>
                <span>${product.price}</span>
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

