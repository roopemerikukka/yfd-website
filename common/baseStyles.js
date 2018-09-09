import css from 'styled-jsx/css'
import { BLUE } from './colors'
import { BEZIER_SLOWER } from './bezierFunctions'

export const globalPageTransitions = css`
  .page-transition-enter .wrapper {
    opacity: 0;
    transform: translateY(20px);
  }

  .page-transition-enter-active .wrapper {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 430ms ${BEZIER_SLOWER}, transform 430ms ${BEZIER_SLOWER};
  }

  .page-transition-enter-done .wrapper {
    opacity: 1;
  }

  .page-transition-exit .wrapper {
    opacity: 1;
  }

  .page-transition-exit-active .wrapper {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 430ms ${BEZIER_SLOWER}, transform 430ms ${BEZIER_SLOWER};
  }

  .page-transition-exit-done .wrapper {
    opacity: 0;
  }
`

// Global styles related to global box model.
export const globalBoxSizing = css`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

// Global text styles.
export const baseTextStyles = css`
  html, body {
    font-family: 'Muli', sans-serif;
    font-size: 16px;
  }

  a {
    color: ${BLUE};
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }
`