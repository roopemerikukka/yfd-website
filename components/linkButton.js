import breakpoints from '../common/breakpoints'
import { textStyles } from '../common/textStyles'
import { BLUE, GREEN } from '../common/colors';

export default ({ children, link }) => (
  <a className={textStyles.linkButton.className} href={link}>
    {children}
    <style jsx>{`
      a {
        display: block;
        padding: 1.5rem;
        text-align: center;
        text-decoration: none;
        user-select: none;
        cursor: pointer;
        border: 2px solid ${GREEN};
        transition: border .2s ease-out;
      }

      a:hover {
        border: 2px solid ${BLUE};
      }

      @media screen and (min-width: ${breakpoints.medium}) {
        a {
          max-width: 308px;
          padding: 1.8rem;
        }
      }

      @media screen and (min-width: ${breakpoints.xlarge}) {
        a {
          max-width: 421px;
        }
      }

      @media screen and (min-width: ${breakpoints.xxlarge}) {
        a {
          max-width: 630px;
        }
      }
    `}</style>
  </a>
)