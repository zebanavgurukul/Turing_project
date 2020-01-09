const knex = require('../knexFile');

// 1
let totalAmount_orders = (cart_id)=>{
    return knex("shopping_cart")
    .join("product","shopping_cart.product_id","=","product.product_id")
    .select("shopping_cart.quantity","product.price")
    .where("cart_id",cart_id)
};

let insertdata_add_orders = (add)=>{
    return knex('orders').insert(add)
};

// 2
let orders = (add) => {
    return knex('order_detail').insert(add)
}

let orders_order_id = (order_id) => {
    return knex("orders")
    .join('shopping_cart','shopping_cart.item_id','orders.order_id')
    .join("product","shopping_cart.product_id","=","product.product_id")
    .select("orders.order_id","product.product_id","name","price","shopping_cart.attributes","quantity","item_id")
    .where("order_id",order_id)
};

let order_get = (order_id) => {
    return knex("order_detail")
    .join("product","order_detail.product_id","=","product.product_id")
    .select("product.product_id","name","price","order_detail.order_id","attributes","product_name","quantity","unit_cost")
    .where("order_id",order_id)
}

// 3
let orderData  = () => {
    return knex.select('*').from('orders')
};

// 4
let shortDetail_order_id = (order_id) => {
    return knex("orders")
    .join('product','product.product_id','orders.order_id')
    .select("orders.order_id","total_amount","created_on","shipped_on","status","product.name")
    .where("order_id",order_id)
};

module.exports = {totalAmount_orders,
    insertdata_add_orders,
    orders,
    orders_order_id,
    order_get,
    orderData,
    shortDetail_order_id}