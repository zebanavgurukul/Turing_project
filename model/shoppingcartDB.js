const knex = require('../knexFile');
// const randomString = require('random-string');
// let generateUniqueId = randomString();

var shoppingcart = (cart_id) => {
    return knex("shopping_cart")
    .where("cart_id",cart_id)
}

var moveToCart_item_id = (item_id) => {
    return knex('saveForLater')
    .where('item_id',item_id)
    .del()
}

var totalAmount_cart_id = (cart_id) => {
    return knex("shopping_cart")
    .join("product","shopping_cart.product_id", "=", "product.product_id")
    .select("shopping_cart.quantity","product.price")
    .where("cart_id",cart_id)
}

module.exports = {shoppingcart, moveToCart_item_id, totalAmount_cart_id}