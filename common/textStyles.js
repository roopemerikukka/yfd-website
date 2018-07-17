import { polyfluidSizing } from './polyfluidSizing'
import { BLACK } from './colors'

/**
 * Configure all global text styles here by extending the array.
 * Only pixel based values are supported. All transformed attributes
 * must be repeated for all breakpoints inside a specific text style.
 * The static property can be used to set static styles for a text
 * style class. The static property only accepts a properly formatted
 * css string.
 * 
 * Example config row:
 * [ <break-point-in-px>, new Map([[ <css-attribute-name>, <attribute-value-in-px> ]]) ]
 */
export const textStyles = {
  h1: {
    className: 'txt-style--h1',
    config: new Map([
      [ 320, new Map([[ 'font-size', 30 ]]) ],
      [ 768, new Map([[ 'font-size', 36 ]]) ],
      [ 1024, new Map([[ 'font-size', 40 ]]) ],
      [ 1280, new Map([[ 'font-size', 56 ]]) ],
      [ 1920, new Map([[ 'font-size', 68 ]]) ],
    ]),
    static: `font-weight: bold; line-height: 110%; color: ${BLACK};`
  },
}

/**
 * Function that returns a CSS string that contains the styles
 * required by the text styles registered above.
 */
export const getTextStylesCss = () => {
  let css = ''
  for ( let style in textStyles ) {
    css += polyfluidSizing( textStyles[style].className, textStyles[style].config, textStyles[style].static )
  }

  // Return a minified css string.
  return css.replace( /\s\s+/g, ' ' )
}