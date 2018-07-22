import { markdownToHtml } from '../common/markdown'

export default ({ content }) => (
  <div className='product-wysiwyg'>
    <div dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />
  </div>
)