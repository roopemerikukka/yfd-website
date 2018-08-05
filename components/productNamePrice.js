import { textStyles } from '../common/textStyles'
import { remCalc } from '../common/helperFunctions'

export default ({ name, price }) => (
  <div className='product-name-price'>
    <h1 className={textStyles.productName.className} itemProp='name'>{name}</h1>
    <h3 className={textStyles.productPrice.className} itemScope itemType='http://schema.org/Offer'>
      <span itemProp='price'>{price}</span> <span itemProp='priceCurrency' content='EUR'>€</span>
    </h3>

    <style jsx>{`
      h1 {
        margin: 0 0 ${remCalc(8)} 0;
        text-transform: uppercase;
      }

      h3 {
        margin: 0;
      }
    `}</style>
  </div>
)