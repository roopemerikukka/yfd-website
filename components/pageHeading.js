import { textStyles } from '../common/textStyles'
import breakpoints from '../common/breakpoints'
import { remCalc } from '../common/helperFunctions'

export default ({ heading }) => (
  <h1 className={`${textStyles.pageHeading.className}`}>
    {heading}
    <style jsx>{`
      h1 {
       margin: ${remCalc(12)} 0 ${remCalc(48)} 0;
      }      
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        h1 {
          margin-bottom: ${remCalc(54)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        h1 {
          margin-bottom: ${remCalc(50)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        h1 {
          margin-bottom: ${remCalc(78)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        h1 {
          margin-bottom: ${remCalc(92)};
        }
      }
    `}</style>
  </h1>
)