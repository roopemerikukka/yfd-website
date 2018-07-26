import breakpoints from '../common/breakpoints'
import { textStyles } from '../common/textStyles'
import { BLUE, WHITE } from '../common/colors';

export default ({ children, link }) => (
  <a className={textStyles.linkButton.className} href={link}>
    {children}
    <style jsx>{`
      a {
        display: block;
        user-select: none;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        padding: 1.5rem;
        transition: background-color .2s ease-out, color .2s ease-out;
        margin-bottom: 1rem;
      }

      a:hover {
        background-color: ${BLUE};
        color: ${WHITE};
        text-decoration: none;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        a {
          max-width: 308px;
          padding: 1.8rem;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        a {
          max-width: 421px;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        a {
          max-width: 630px;
        }
      }
    `}</style>
  </a>
)