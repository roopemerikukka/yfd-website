const routes = require('next-routes')

module.exports = routes()
.add('product', 'p/:slug', 'singleProduct')