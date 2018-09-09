import { Link } from '../routes'
import { textStyles } from '../common/textStyles'
import breakpoints from '../common/breakpoints'
import { remCalc } from '../common/helperFunctions'

export default ({ designer }) => (
  <Link scroll={false} to={`/designers/${designer.slug}`}>
    <a className='designer-card'>
      <img src={`${designer.profileImage.fields.file.url}?fm=jpg&fl=progressive&fit=fill&w=800&h=800`} alt={designer.name} />
      <h2 className={textStyles.designerCardTitle.className} itemProp='brand'>{designer.name}</h2>
      <h3 className={textStyles.designerCardTagline.className}>{designer.tagline}</h3>

      <style jsx>{`
        .designer-card {}

        .designer-card h2 {
          margin: 0 0 ${remCalc(12)} 0;
          color: black;
          transition: color 0.12s ease-in;
        }

        .designer-card h3 {
          margin: 0 auto;
          color: black;
          transition: color 0.12s ease-in;
          text-transform: uppercase;
          max-width: 320px;
        }

        .designer-card:hover {
          text-decoration: none;
        }

        .designer-card:hover h2,
        .designer-card:hover h3 {
          color: blue;
        } 

        .designer-card img {
          display: block;
          margin: 0 auto;
          max-width: 100px;
          border-radius: 100%;
          margin-bottom: ${remCalc(22)};
        }
      `}</style>

      <style jsx>{`
        @media screen and (min-width: ${breakpoints.large}) {
          .designer-card img {
            max-width: 120px;
          }
        }
      `}</style>

      <style jsx>{`
        @media screen and (min-width: ${breakpoints.xlarge}) {
          .designer-card h3 {
            max-width: 400px;
          }
          
          .designer-card img {
            max-width: 180px;
            margin-bottom: ${remCalc(40)};
          }
        }
      `}</style>

      <style jsx>{`
        @media screen and (min-width: ${breakpoints.xxlarge}) {
          .designer-card img {
            max-width: 280px;
          }
        }
      `}</style>
    </a>
  </Link>
)