const knex = require('../knexFile');

let shoppingcart_generateUniqueId = (total_data,cart_id) => {
    return knex("shopping_cart")
    .where("cart_id",cart_id)
}

let insertdata_add = (add)=>{
    return knex('shopping_cart').insert(add)
};

let shoppingcart = (cart_id) => {
    return knex("shopping_cart")
    .where("cart_id",cart_id)
};

let insertdata_updata = (item_id,updata)=>{
    return knex("shopping_cart")
    .join("product","shopping_cart.product_id",'=',"product.product_id")
    .select("shopping_cart.item_id","attributes","quantity","product.product_id","price","name")
    .update(updata)
    .where("item_id",item_id)
};
 
let shoppingcart_empty = (cart_id) => {
    return knex('shopping_cart')
    .where('cart_id',cart_id)
    .del()
};


let totalAmount_cart_id = (cart_id) => {
    return knex("shopping_cart")
    .join("product","shopping_cart.product_id", "=", "product.product_id")
    .select("shopping_cart.quantity","product.price")
    .where("cart_id",cart_id)
};

let saveForLater_item_id = (item_id) => {
    return knex('shopping_cart').where("item_id",item_id)

};

let getSaved_cart_id = (cart_id) => {
    return knex('save_item')
    .join('product','save_item.cart_id','=', 'product.product_id')
    .select('product.name','save_item.item_id','attributes','price')
    .where('cart_id',cart_id)
};

let removeProduct_item_id = (item_id) => {
    return knex('shopping_cart')
    .where('item_id',item_id).del()
}
module.exports = {shoppingcart, 
    insertdata_updata, 
    shoppingcart_empty, 
    totalAmount_cart_id, 
    insertdata_add, 
    saveForLater_item_id, 
    getSaved_cart_id, 
    removeProduct_item_id,
    shoppingcart_generateUniqueId}