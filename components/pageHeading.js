import { textStyles } from '../common/textStyles'
import breakpoints from '../common/breakpoints'

export default ({ heading }) => (
  <h1 className={`${textStyles.pageHeading.className}`}>
    {heading}
    <style jsx>{`
      h1 {
       margin: 12px 0 48px 0;
      }

      @media screen and (min-width: ${breakpoints.medium}) {
        h1 {
          margin-bottom: 54px;
        }
      }

      @media screen and (min-width: ${breakpoints.large}) {
        h1 {
          margin-bottom: 50px;
        }
      }

      @media screen and (min-width: ${breakpoints.xlarge}) {
        h1 {
          margin-bottom: 78px;
        }
      }

      @media screen and (min-width: ${breakpoints.xxlarge}) {
        h1 {
          margin-bottom: 92px;
        }
      }
    `}</style>
  </h1>
)