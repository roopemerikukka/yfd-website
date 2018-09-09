import moment from 'moment'
import { daysLeft, remCalc } from '../common/helperFunctions'
import { textStyles } from '../common/textStyles'
import { BLACK } from '../common/colors'

const formatDays = (days) => {
  if (days < 0) {
    return 'Pre-orders'
  } else {
    return days === 1 ? '1 day left' : `${days} days left`
  }
}

export default ({ status, endDate }) => (
  <div className={`product-status is-${status}`}>
    <h4 className={textStyles.productStatus.className}>
      {status === 'Pre-order' ? formatDays(daysLeft(moment(), endDate)) : status}
    </h4>
    <style jsx>{`
      .product-status {
        margin-bottom: ${remCalc(16)};
        color: ${BLACK}
      }

      .product-status.is-Upcoming {
        color: #C4C4C4;
      }

      .product-status h4 {
        margin: 0;
      }
    `}</style>
  </div>
)
