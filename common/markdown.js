const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

// Configure syntax for custom container
md.use(require('markdown-it-container'), 'box', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="wysiwyg__box">\n';
    } else {
      // closing tag
      return '</div>\n';
    }
  }
});

module.exports = {
  markdownToHtml (markdownString = '') {
    return md.render(markdownString)
  }
}