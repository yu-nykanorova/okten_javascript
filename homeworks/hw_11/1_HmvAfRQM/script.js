// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

const cartsList = document.getElementById("cartsList");

fetch("https://dummyjson.com/carts")
.then(response => response.json())
.then(({carts}) => showCarts(carts));

function showCarts(data){
    for (const item of data){
        const {id, products, userId, total, discountedTotal, totalProducts, totalQuantity} = item;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        const cartId = document.createElement("h2");
        cartId.classList.add("cart-item__id");
        cartId.textContent = `Cart ${id}`;
        const cartUserId = document.createElement("p");
        cartUserId.classList.add("cart-item__userId");
        cartUserId.textContent = `User: ${userId}`;
        const cartProductsList = document.createElement("div");
        cartProductsList.classList.add("cart-item__products");
        const cartTotalBalance = document.createElement("p");
        cartTotalBalance.classList.add("cart-item__total-balance");
        cartTotalBalance.textContent = `Balance: ${total}`;
        const cartDiscountedTotalBalance = document.createElement("p");
        cartDiscountedTotalBalance.classList.add("cart-item__total-discount");
        cartDiscountedTotalBalance.textContent = `Total: ${discountedTotal}`;
        const cartTotalProducts = document.createElement("p");
        cartTotalProducts.textContent = `Products: ${totalProducts}`;
        const cartTotalQuantity = document.createElement("p");
        cartTotalQuantity.textContent = `Total quantity: ${totalQuantity}`;

        for (const product of products){
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");
            const productImage = document.createElement("img");
            productImage.src = product.thumbnail;
            productImage.alt = product.title;
            const productDescription = document.createElement("div");
            productDescription.classList.add("product-description");
            const productTitle = document.createElement("h3");
            productTitle.textContent = `${product.title} (id: ${product.id})`;
            const productPrice = document.createElement("p");
            productPrice.textContent = `Price: ${product.price}`;
            const productQuantity = document.createElement("p");
            productQuantity.textContent = `Quantity: ${product.quantity}`;
            const productTotalPrice = document.createElement("p");
            productTotalPrice.textContent = `Total price: ${product.total.toFixed(2)}`;
            const productDiscount = document.createElement("p");
            productDiscount.textContent = `Discount: ${product.discountPercentage}%`;
            const productBalance = document.createElement("p");
            productBalance.textContent = `Total amount: ${product.discountedTotal}`;

            productDescription.append(productTitle, productPrice, productQuantity, productTotalPrice, productDiscount, productBalance);
            productItem.append(productImage, productDescription);
            cartProductsList.append(productItem);
        }
        cartItem.append(cartId, cartUserId, cartProductsList, cartTotalProducts, cartTotalQuantity, cartTotalBalance, cartDiscountedTotalBalance);
        cartsList.append(cartItem);
    }
}