const knex = require('../knexFile');

// 1
var selectData  = () => {
    return knex.select('*').from('attribute')
}

// 2
var selectby_id  = (id) => {
    return knex.select("*")
    .from('attribute')
    .where('attribute.attribute_id', id)
}

// 3
var select_attribute_value_id = (attribute_value_id) => {
    return knex('attribute')
    .select('attribute_value.attribute_value_id', 'value')
    .join('attribute_value','attribute.attribute_id','=','attribute_value.attribute_id')
    .where('attribute_value.attribute_value_id',attribute_value_id)
};

// 4
var select_attributes_inProduct = (product_id) => {
    return knex("attribute")
    .join("attribute_value","attribute.attribute_id",'=',"attribute_value.attribute_id")
    .join("product_attribute","attribute_value.attribute_value_id",'=', "product_attribute.attribute_value_id")
    .select("attribute_value.attribute_value_id","name","value")
    .where("product_id",product_id)
};

module.exports = {selectData, selectby_id, select_attribute_value_id, select_attributes_inProduct}