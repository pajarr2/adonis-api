'use strict'

const Database = use('Database');

class ProductController {
    async showProduct({ request, params, response }) {
        const query = await Database.raw(`select * from products`);
        return query.rows;
    }
}

module.exports = ProductController
