const knex = require('../knexFile');

var selectData  = () => {
    return knex.select('*').from('attribute')
}

var selectby_id  = (id) => {
    return knex.select("*")
    .from('attribute')
    .where('attribute.attribute_id', id)
}

var select_attribute_value_id = (attribute_value_id) => {
    return knex('attribute')
    .select('attribute_value.attribute_value_id', 'value')
    .join('attribute_value','attribute.attribute_id','=','attribute_value.attribute_id')
    .where('attribute_value.attribute_value_id',attribute_value_id)
};

var select_attributes_inProduct = (product_id) => {
    return knex("attribute")
    .join("attribute_value","attribute.attribute_id",'=',"attribute_value.attribute_id")
    .join("product_attribute","attribute_value.attribute_value_id",'=', "product_attribute.attribute_value_id")
    .select("attribute_value.attribute_value_id","name","value")
    .where("product_id",product_id)
}

module.exports = {selectData, selectby_id, select_attribute_value_id, select_attributes_inProduct}