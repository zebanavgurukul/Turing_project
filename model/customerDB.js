const knex = require('../knexFile');


let putCustomer = (updata,customer_id)=>{
    return knex('customer').update(updata).where("customer_id",customer_id)
}

var selectcustomer  = () => {
    return knex.select('*').from('customer')
}

let insertdata_customers = (post_data) => {
    return knex('customer').insert(post_data)
}

let customers_login = (email) => {
    return knex.select('email').from('customer').havingIn('customer.email',email)
}

let else_login = (password)=>{
    return knex.select('password').from('customer').havingIn('customer.password',password)

}

let customers_address = (updata,customer_id)=>{
    return knex('customer').update(updata).where("customer_id",customer_id)
}

let customers_creditCard = (updata,customer_id) => {
    return knex('customer').update(updata).where("customer_id",customer_id)
}
module.exports = {putCustomer, selectcustomer, insertdata_customers, customers_login, else_login, customers_address, customers_creditCard}