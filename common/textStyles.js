import { polyfluidSizing } from './polyfluidSizing'
import { BLACK, WHITE, GREEN } from './colors'

/**
 * Configure all global text styles here by extending the array.
 * Only pixel based values are supported. All transformed attributes
 * must be repeated for all breakpoints inside a specific text style.
 * The static property can be used to set static styles for a text
 * style class. The static property only accepts a properly formatted
 * css string. In the config you can either give a className or a html
 * element name. The html element name must be given in htmlElement property.
 * 
 * Example config row:
 * [ <break-point-in-px>, new Map([[ <css-attribute-name>, <attribute-value-in-px> ]]) ]
 */
export const textStyles = {
  h1: {
    className: 'txt-style--h1',
    config: new Map([
      [320, new Map([['font-size', 30]])],
      [768, new Map([['font-size', 36]])],
      [1024, new Map([['font-size', 40]])],
      [1280, new Map([['font-size', 56]])],
      [1920, new Map([['font-size', 68]])],
    ]),
    static: `font-weight: bold; line-height: 110%; color: ${BLACK};`
  },

  copy: {
    className: 'txt-style--copy',
    config: new Map([
      [320, new Map([['font-size', 16]])],
      [1920, new Map([['font-size', 22]])],
    ]),
    static: `line-height: 130%; color: ${BLACK};`
  },

  linkButton: {
    className: 'txt-style--link-btn',
    config: new Map([
      [320, new Map([['font-size', 18]])],
      [768, new Map([['font-size', 20]])],
      [1024, new Map([['font-size', 20]])],
      [1280, new Map([['font-size', 24]])],
      [1920, new Map([['font-size', 36]])],
    ]),
    static: `font-weight: bold; line-height: 80%; color: ${WHITE}; background-color: ${GREEN}; text-transform: uppercase;`
  },

  contactCopy: {
    className: 'txt-style--contact',
    config: new Map([
      [320, new Map([['font-size', 13]])],
      [1920, new Map([['font-size', 14]])],
    ]),
    static: `line-height: 1.4; color: ${BLACK};`
  },

  contactCopySmall: {
    className: 'txt-style--contact-small',
    config: new Map([
      [320, new Map([['font-size', 10]])],
      [1920, new Map([['font-size', 11]])],
    ]),
    static: `line-height: 1.4; color: ${BLACK};`
  },

  contactTitle: {
    className: 'txt-style--contact-title',
    config: new Map([
      [320, new Map([['font-size', 13]])],
      [1920, new Map([['font-size', 14]])],
    ]),
    static: `line-height: 1; color: ${BLACK}; font-weight: bold; text-transform: uppercase;`
  },

  pageHeading: {
    className: 'txt-style--page-heading',
    config: new Map([
      [320, new Map([['font-size', 22]])],
      [768, new Map([['font-size', 24]])],
      [1280, new Map([['font-size', 32]])],
      [1920, new Map([['font-size', 46]])]
    ]),
    static: `line-height: 1; color: ${BLACK}; font-weight: bold; text-transform: uppercase; text-align: center;`
  },

  cardTitle: {
    className: 'txt-style--card-title',
    config: new Map([
      [320, new Map([['font-size', 16]])],
      [1280, new Map([['font-size', 18]])],
      [1920, new Map([['font-size', 22]])]
    ]),
    static: `line-height: 1; font-weight: 700; text-transform: uppercase; text-decoration: none;`
  },

  cardPrice: {
    className: 'txt-style--card-price',
    config: new Map([
      [320, new Map([['font-size', 16]])],
      [1280, new Map([['font-size', 20]])],
      [1920, new Map([['font-size', 30]])]
    ]),
    static: `line-height: 1; font-weight: 600; text-decoration: none;`
  },

  smallSectionTitle: {
    className: 'txt-style--small-section-title',
    config: new Map([
      [320, new Map([['font-size', 16]])],
      [768, new Map([['font-size', 18]])],
      [1280, new Map([['font-size', 22]])],
      [1920, new Map([['font-size', 24]])]
    ]),
    static: `line-height: 1.1; font-weight: 700; text-transform: uppercase;`
  },

  productName: {
    className: 'txt-style--product-title',
    config: new Map([
      [320, new Map([['font-size', 22]])],
      [768, new Map([['font-size', 24]])],
      [1280, new Map([['font-size', 32]])],
      [1920, new Map([['font-size', 46]])]
    ]),
    static: `line-height: 1; font-weight: 700; text-transform: uppercase;`
  },

  productPrice: {
    className: 'txt-style--product-price',
    config: new Map([
      [320, new Map([['font-size', 20]])],
      [320, new Map([['font-size', 22]])],
      [1280, new Map([['font-size', 30]])],
      [1920, new Map([['font-size', 42]])]
    ]),
    static: `line-height: 0.8; font-weight: 600;`
  }

}

/**
 * Function that returns a CSS string that contains the styles
 * required by the text styles registered above.
 */
export const getTextStylesCss = () => {
  let css = ''
  for (let style in textStyles) {
    css += polyfluidSizing(textStyles[style])
  }

  // Return a minified css string.
  return css.replace(/\s\s+/g, ' ')
}