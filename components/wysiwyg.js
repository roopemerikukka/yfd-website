import { markdownToHtml } from '../common/markdown'
import { textStyles } from '../common/textStyles'
import { remCalc } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'
import { BLACK } from '../common/colors'

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

      .wysiwyg :global(ol) {
        padding-left: 0;
        list-style-position: inside;
      }

      .wysiwyg :global(li:not(:last-child)) {
        margin-bottom: 1rem;
      }

      .wysiwyg :global(.wysiwyg__box) {
        border: 1px solid ${BLACK};
        padding: 1rem 1rem 0 1rem;
        margin-bottom: 1rem;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        .wysiwyg :global(h1) {
          margin-bottom: ${remCalc(54)};
        }

        .wysiwyg :global(.wysiwyg__box) {
          padding: 2rem 2rem 1rem 2rem;
          margin: 2rem 0;
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

        .wysiwyg :global(.wysiwyg__box) {
          padding: 3rem 3rem 2rem 3rem;
          margin: 3rem 0;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        .wysiwyg :global(h1) {
          margin-bottom: ${remCalc(78)};
        }

        .wysiwyg :global(.wysiwyg__box) {
          padding: 4rem 4rem 3rem 4rem;
          margin: 4rem 0;
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

        .wysiwyg :global(.wysiwyg__box) {
          padding: 6rem 6rem 5rem 6rem;
          margin: 6rem 0;
        }
      }
    `}</style>
  </div>
)