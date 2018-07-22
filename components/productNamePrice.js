import { textStyles } from '../common/textStyles'
import { remCalc } from '../common/helperFunctions'

export default ({ name, price }) => (
  <div className='product-name-price'>
    <h1 className={textStyles.productName.className}>{name}</h1>
    <h3 className={textStyles.productPrice.className}>{price}€</h3>

    <style jsx>{`
      h1 {
        margin: 0 0 ${remCalc(8)} 0;
      }

      h3 {
        margin: 0;
      }
    `}</style>
  </div>
)