const knex = require('../knexFile');

// 1
var selectData  = () => {
    return knex.select('*').from('shipping')
};

// 2
var selectby_id  = (id) => {
    return knex.select("*")
    .from('shipping')
    .where('shipping.shipping_id', id)
};

module.exports = {selectData, selectby_id}