const routes = require('next-routes')

module.exports = routes()
  .add('products', '/products')
  .add('product', '/products/:slug', 'products/singleProduct')