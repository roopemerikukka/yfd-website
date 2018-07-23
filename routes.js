const routes = require('next-routes')

module.exports = routes()
  .add('products', '/products')
  .add('product', '/products/:slug', 'products/singleProduct')
  .add('designers', '/designers')
  .add('designer', '/designers/:slug', 'designers/singleDesigner')