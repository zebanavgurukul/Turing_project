const knex = require('../knexFile');

// 1
var selectData  = ()=>{
     return knex.select('*').from("department")
};

// 2
var selectby_id  = (id) => {
    return knex.select("*")
    .from('department')
    .where('department.department_id', id)
};

module.exports = {selectData, selectby_id}