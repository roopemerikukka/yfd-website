import { Link } from '../routes'
import { textStyles } from '../common/textStyles'
import breakpoints from '../common/breakpoints'
import { BLACK } from '../common/colors'

export default ({ designers }) => (
  <ul className='designer-pu'>
    {designers.map(( designer, index ) => (
      <li key={index}>
        <Link scroll={false} to={`/designers/${designer.fields.slug}`}>
          <a>
            <img
              itemProp='image'
              srcSet={`
                ${designer.fields.profileImage.fields.file.url}?w=180&h=180&fit=fill 180w,
                ${designer.fields.profileImage.fields.file.url}?w=360&h=360&fit=fill 360w,
                ${designer.fields.profileImage.fields.file.url}?w=540&h=540&fit=fill 540w,
                ${designer.fields.profileImage.fields.file.url}?w=720&h=720&fit=fill 720w
              `}
              sizes={`
                (max-width: ${breakpoints.medium}) 50vw,
                20vw
              `}
              src={`${designer.fields.profileImage.fields.file.url}?w=180&h=180&fit=fill`}
              alt={designer.fields.profileImage.fields.title}
            />
            <div className='text-wrap'>
              <strong className={textStyles.designerPreviewName.className}>{designer.fields.name}</strong>
              <div className={textStyles.designerPreviewSlogan.className}>{designer.fields.tagline}</div>
            </div>
          </a>
        </Link>
      </li>
    ))}

    <style jsx>{`
      ul {
        padding: 0;
        list-style: none;
        margin: 4rem 0 8rem 0;
      }

      li:not(:last-child) {
        margin-bottom: 2rem;
      }

      a {
        text-decoration: none;
        color: ${BLACK};
      }

      a:hover {
        text-decoration: none;
      }

      a strong {
        display: block;
        margin-bottom: 0.6rem;
      }
      
      img {
        display: block;
        width: 100%;
        max-width: 180px;
        border-radius: 100%;
        margin: 0 auto 1rem auto;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.medium}) {
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 6rem 0 12rem 0;
        }

        li {
          width: 50%;
        }

        li:nth-child(3n+1) {
          padding-right: 5%;
        }

        li:nth-child(3n+2) {
          padding-left: 5%;
        }

        li:nth-child(3n+3) {
          width: 100%;
        }

        li:not(:last-child) {
          margin-bottom: 4rem;
        }

        .text-wrap {
          max-width: 200px;
          margin: 0 auto;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        img {
          max-width: 260px;
        }

        .text-wrap {
          max-width: 280px;
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xxlarge}) {
        img {
          max-width: 290px;
        }

        .text-wrap {
          max-width: 310px;
        }
      }
    `}</style>
  </ul>
)