const marked = require('marked')

module.exports = {
  markdownToHtml (markdownString = '') {
    return marked(markdownString)
  }
}