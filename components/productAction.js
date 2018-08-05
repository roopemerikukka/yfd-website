import LinkButton from '../components/linkButton'
import { remCalc } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'

export default ({ label, url }) => (
  <div className='product-action'>
    <LinkButton link={url}>{label}</LinkButton>

    <style jsx>{`
      .product-action {
        margin: 0;
      }

      .product-action :global(a) {
        margin-bottom: 0;
      }
    `}</style>
  </div>
)