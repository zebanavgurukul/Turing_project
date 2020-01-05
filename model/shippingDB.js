const knex = require('../knexFile');

var selectData  = () => {
    return knex.select('*').from('shipping')
}

var selectby_id  = (id) => {
    return knex.select("*")
    .from('shipping')
    .where('shipping.shipping_id', id)
}

module.exports = {selectData, selectby_id}