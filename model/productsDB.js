const knex = require('../knexFile');

// 1
var selectData  = () => {
    return knex.select('*').from('product')
};

// 2
var select_products_search = (search_value) => {
    return knex.select('*')
    .from('product')
    .where('name','like',  '%' +search_value+ '%')
};

// 3
var select_product_id = (product_id) => {
    return knex.select("*")
    .from('product')
    .where("product.product_id",product_id)
};

// 4
var select_inCategory_category_id = (category_id) => {
    return knex.select('*')
    .from('product')
    .join('category','category.category_id','product.product_id')
    .where("category.category_id",category_id)
};

// 5
var select_inDepartment_department_id = (department_id) => {
    return knex.select('*')
    .from('product')
    .join('department','department.department_id','product.product_id')
    .where("department_id",department_id)
};

// 6
var select_details_product_id = (product_id) => {
    return knex("product")
    .where("product_id",product_id)
};

// 7
var select_locations_product_id = (product_id) => {
    return knex("product_category")
    .join("category","product_category.category_id",'=',"category.category_id")
    .join("department","category.department_id",'=', "department.department_id")
    .select("category.category_id","department.name as department_name ","product_id","category.name as category_name")
    .where("product_id",product_id)
};

// 8
var select_reviews_product_id = (product_id) => {
    return knex("product")
    .join('product_review','product.product_id','=','product_review.product_id')
    .select('product_review.name','review','rating', 'product.product_id as product_id')
    .where('product_review.product_id',product_id)
};

// 9
var insertdata_review = (reviews)=>{
    return knex('review').insert(reviews)
};

module.exports = {selectData, select_products_search, select_product_id, select_inCategory_category_id, select_inDepartment_department_id, select_details_product_id, select_locations_product_id, select_reviews_product_id, insertdata_review}