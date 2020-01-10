const knex = require("../knexFile");

// 1
var selectData  = () => {
    return knex.select("*").from('tax')
};

// 2
var selectby_id  = (tax_id) => {
    return knex.select("*")
    .from("tax")
    .where("tax.tax_id", tax_id)
};

module.exports = {selectData, selectby_id}