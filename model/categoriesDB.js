const knex = require('../knexFile');

// 1
var selectData  = () => {
    return knex.select('*').from('category')
};

// 2
var selectby_id  = (id) => {
    return knex.select("*")
    .from('category')
    .where('category.category_id', id)
};

// 3
var select_product_id = (product_id) => {
    return knex('category')
    .select('product_category.category_id','category.department_id','name')
    .join('product_category','category.category_id','=','product_category.category_id')
    .where('product_category.product_id',product_id)
};

// 4
var select_department_id = (department_id) => {
    return knex("category")
    .where("department_id",department_id)
};

module.exports = {selectData, selectby_id, select_product_id, select_department_id}