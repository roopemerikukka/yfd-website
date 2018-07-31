import { BLACK, LIGHT_GRAY } from '../common/colors'
import breakpoints from '../common/breakpoints'

export default ({ onClick }) => (
  <div className='nav-toggle' onClick={onClick}>
    <span></span>
    <style jsx>{`
      .nav-toggle {
      position: fixed;
      top: 43px;
      right: 7.4%;
      width: 43px;
      height: 43px;
      cursor: pointer;
      z-index: 50;
    }

    .nav-toggle span {
      display: block;
      position: absolute;
      top: 18px;
      right: 0;
      width: 24px;
      height: 2px;
      background: ${LIGHT_GRAY};
      transition: background 0.18s 0.08s ease-in;
    }

    .nav-toggle span:before,
    .nav-toggle span:after {
      position: absolute;
      content: '';
      right: 0;
      height: 2px;
      background: ${LIGHT_GRAY};
    }

    .nav-toggle span:before {
      width: 32px;
      transform: translateY(-6px);
      transition: background 0.18s 0s ease-in;
    }

    .nav-toggle span:after {
      width: 20px;
      transform: translateY(6px);
      transition: background 0.18s 0.14s ease-in;
    }

    .nav-toggle:hover span,
    .nav-toggle:hover span:before,
    .nav-toggle:hover span:after {
      background: ${BLACK};
    }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .nav-toggle {
          display: none;
        }
      }
    `}</style>
  </div>
)