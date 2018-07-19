import { GRAY } from '../common/colors'
import { textStyles } from '../common/textStyles'
import breakpoints from '../common/breakpoints'
import { markdownToHtml } from '../common/markdown'

export default ({ siteSettings }) => (
  <footer className='site-footer'>
    <div className='site-footer__wrap'>
      <div className='site-footer__left'>
        <h3 className={textStyles.contactTitle}>Contact</h3>
        <div dangerouslySetInnerHTML={{__html: markdownToHtml(siteSettings.contact)}} className={`site-footer__md-content ${textStyles.contactCopy.className}`} />
        <p className={`site-footer__social-links ${textStyles.contactCopy.className}`}>You can also find us on <a href={siteSettings.facebook}>Facebook</a> and <a href={siteSettings.instagram}>Instagram</a></p>
      </div>
      <div className='site-footer__right'>
        <ul className={`site-footer__nav ${textStyles.contactCopySmall.className}`}>
          <li><a href='#'>Terms of service</a></li>
          <li><a href='#'>Cookie policy</a></li>
        </ul>
      </div>
    </div>
    
    <style jsx>{`
      .site-footer {
        background-color: ${GRAY};
        padding: 2rem 0;
      }

      .site-footer__left {
        padding-right: 0.5rem;
      }

      .site-footer__right {
        padding-left: 0.5rem;
      }

      .site-footer__wrap {
        display: flex;
        justify-content: space-between;
        width: 85.2%;
        margin: 0 auto;
      }

      h3,
      .site-footer__md-content {
        margin-bottom: 1rem;
      }

      h3 {
        margin-top: 0;
      }

      .site-footer__social-links {
        margin-bottom: 0;
      }

      .site-footer__nav {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: right;
      }

      @media screen and (min-width: ${breakpoints.medium}) {
        .site-footer__wrap {
          width: 90%;
        }
      }
    `}</style>
  </footer>
)