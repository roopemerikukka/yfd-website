import { textStyles } from '../common/textStyles'
import breakpoints from '../common/breakpoints'

export default ({ people }) => (
  <ul className='yfd-people'>
    {people.map((person, index) => (
      <li key={index}>
        <img src={person.fields.profileImage.fields.file.url} />
        <h3 className={textStyles.designerCardTagline.className}>{person.fields.name}</h3>
        <h4 className={textStyles.designerCardTagline.className}>{person.fields.description}</h4>
      </li>
    ))}
    <style jsx>{`
      .yfd-people {
        width: 100%;
        list-style: none;
        margin: 4rem 0 0 0;
        padding: 0;
      }

      .yfd-people li {
        display: block;
        max-width: 60%;
        margin: 0 auto 2rem;
        text-align: center;
      }

      .yfd-people h3 {
        margin: 0 0 0.5rem 0;
      }

      .yfd-people h4 {
        margin: 0;
      }

      .yfd-people img {
        border-radius: 100%;
        max-width: 100%;
        margin-bottom: 1rem;
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .yfd-people {
          display: flex;
          width: calc(100% + 200px);
          transform: translateX(-100px);
          flex-wrap: wrap;
          overflow: hidden;
          margin: 6rem -1.5% 0;
        }

        .yfd-people li {
          width: 30%;
          padding: 1.5%;
        }
      }
    `}</style>
  </ul>
)