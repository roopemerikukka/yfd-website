export const polyfluidSizing = ( className, config, staticStyles = '' ) => {
  // Early exit if the arguments don't look even mildly valid.
  if ( !className || className.length < 1 || !config || config.size < 1 ) {
    return
  }

  // Generate css for base prop values.
  let basePropValues = ''
  const firstBpProps = config.values().next().value
  firstBpProps.forEach(( value, prop ) => {
    basePropValues += `${prop}: ${value}px;`
  })

  let css = `
    .${className} {
      ${staticStyles}
      ${basePropValues}
    }
  `

  // Generate breakpoints with linear interpolation.
  const breakPoints = Array.from( config, ([ key ]) => key )
  for ( let i = 0; i <= breakPoints.length - 2; i++ ) {
    const fromBp = config.get( breakPoints[i])
    const toBp = config.get( breakPoints[i + 1])

    let propValues = ''
    fromBp.forEach(( value, key ) => {
      propValues += `${key}: ${linearlyInterpolate( breakPoints[i], breakPoints[i + 1], value, toBp.get( key ))};`
    })

    css += `
      @media (min-width: ${breakPoints[i]}px) {
        .${className} {
          ${propValues}
        }
      }
    `
  }

  // Generate css for stop prop values.
  let stopPropValues = ''
  const lastBpProps = Array.from( config.values()).pop()
  lastBpProps.forEach(( value, prop ) => {
    stopPropValues += `${prop}: ${value}px;`
  })

  return css += `
    @media (min-width: ${breakPoints[breakPoints.length - 1]}px) {
      .${className} {
        ${stopPropValues}
      }
    }
  `
}

/**
 * Generates a CSS property value that linearly interpolates between
 * two points. Only pixels based values are supported.
 * @param {int} fromBp 
 * @param {int} toBp 
 * @param {int} fromValue 
 * @param {int} toValue 
 */
const linearlyInterpolate = ( fromBp, toBp, fromValue, toValue ) => {
  // Exit early if no values passed.
  if ( !fromBp || !toBp || !fromValue || !toValue ) {
    return
  }

  // The slope.
  const m = ( toValue - fromValue ) / ( toBp - fromBp )

  // The y-intercept.
  let b = fromValue - m * fromBp

  // Determine if the sign should be positive or negative.
  let sign = '+'
  if ( b < 0 ) {
    sign = '-'
    b = Math.abs( b )
  }

  return `calc(${m * 100}vw ${sign} ${b}px)`
}