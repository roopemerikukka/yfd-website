import css from 'styled-jsx/css'
import { BLACK, BLUE } from './colors'

// Global styles related to page transitions.
export const PAGE_TRANSITION_TIMEOUT = 400
export const globalPageTransitions = css`
  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${PAGE_TRANSITION_TIMEOUT}ms, transform ${PAGE_TRANSITION_TIMEOUT}ms;
  }

  .page-transition-exit {
    opacity: 1;
  }

  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${PAGE_TRANSITION_TIMEOUT}ms;
  }

  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }

  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${PAGE_TRANSITION_TIMEOUT}ms;
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
  }

  a:hover {
    text-decoration: underline;
  }
`