import LinkButton from '../components/linkButton'
import { remCalc } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'

export default ({ label, url }) => (
  <div className='product-action'>
    <LinkButton link={url}>{label}</LinkButton>

    <style jsx>{`
      .product-action {
        margin: ${remCalc(16)} 0 0 0;
      }

      .product-action :global(a) {
        margin-bottom: 0;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        .product-action {
          margin-top: ${remCalc(20)};
        }        
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .product-action {
          margin-top: ${remCalc(28)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        .product-action {
          margin-top: ${remCalc(32)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        .product-action {
          margin-top: ${remCalc(56)};
        }
      }
    `}</style>
  </div>
)