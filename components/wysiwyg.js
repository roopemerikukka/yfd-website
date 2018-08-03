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

      .wysiwyg :global(h1) {
        margin: ${remCalc(12)} 0 ${remCalc(48)} 0;
        text-align: center;
        text-transform: uppercase;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        .wysiwyg :global(h1) {
          margin-bottom: ${remCalc(54)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .wysiwyg :global(p) {
          margin: 0 0 ${remCalc(32)} 0;
        }

        .wysiwyg :global(h1) {
          margin-bottom: ${remCalc(50)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        .wysiwyg :global(h1) {
          margin-bottom: ${remCalc(78)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        .wysiwyg :global (p) {
          margin: 0 0 ${remCalc(40)} 0;
        }

        .wysiwyg :global(h1) {
          margin-bottom: ${remCalc(92)};
        }
      }
    `}</style>
  </div>
)