const knex = require('../knexFile');

// 1
let putCustomer = (updata,customer_id)=>{
    return knex('customer').update(updata).where("customer_id",customer_id)
};

// 2
var selectcustomer  = () => {
    return knex.select('*').from('customer')
};

// 3
let insertdata_customers = (post_data) => {
    return knex('customer').insert(post_data)
};

// 4
let customers_login = (email) => {
    return knex.select('email').from('customer').havingIn('customer.email',email)
};

// 5
let else_login = (password)=>{
    return knex.select('password').from('customer').havingIn('customer.password',password)
};

// 6
let customers_address = (updata,customer_id)=>{
    return knex('customer').update(updata).where("customer_id",customer_id)
};

// 7
let customers_creditCard = (updata,customer_id) => {
    return knex('customer').update(updata).where("customer_id",customer_id)
};

module.exports = {putCustomer, selectcustomer, insertdata_customers, customers_login, else_login, customers_address, customers_creditCard}