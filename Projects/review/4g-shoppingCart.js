const shoppingCart = {
    items: [
        {productName: "apples", price: 8.59, quantity: 40 },
        {productName: "oranges", price: 12, quantity: 100 },

    ],

    addItemToCart(item) {
        this.items.push(item)
    },
}

shoppingCart.addItemToCart({productName: "Honey", price: 18.59, quantity: 400 })


console.log(shoppingCart.items)