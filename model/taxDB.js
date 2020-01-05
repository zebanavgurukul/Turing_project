const knex = require('../knexFile');

var selectData  = () => {
    return knex.select('*').from('tax')
}

var selectby_id  = (id) => {
    return knex.select("*")
    .from('tax')
    .where('tax.tax_id', id)
}

module.exports = {selectData, selectby_id}