import { markdownToHtml } from '../common/markdown'
import { textStyles } from '../common/textStyles'
import { remCalc } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'

export default ({ content }) => (
  <div className='wysiwyg'>
    <div className={textStyles.copy.className} dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />

    <style jsx>{`
      .wysiwyg :global(p) {
        margin: 0 0 ${remCalc(24)} 0;
      }

      .wysiwyg :global(img) {
        max-width: 100%;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .wysiwyg :global (p) {
          margin: 0 0 ${remCalc(32)} 0;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        .wysiwyg :global (p) {
          margin: 0 0 ${remCalc(40)} 0;
        }
      }
    `}</style>
  </div>
)