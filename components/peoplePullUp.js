import { remCalc } from '../common/helperFunctions'
import { textStyles } from '../common/textStyles'
import breakpoints from '../common/breakpoints'

export default ({ people }) => (
  <ul className='people-pu'>
    {people.map((person, index) => (
      <li className={textStyles.peoplePuCopy.className} key={index}><strong>{person.fields.name}</strong>, {person.fields.description}</li>
    ))}

    <style jsx>{`
      .people-pu {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .people-pu li {
        margin-bottom: ${remCalc(6)};
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.large}) {
        .people-pu li {
          margin-bottom: ${remCalc(12)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        .people-pu li {
          margin-bottom: ${remCalc(16)};
        }
      }
    `}</style>

    <style jsx>{`
      @media screen and (min-width: ${breakpoints.xlarge}) {
        .people-pu li {
          margin-bottom: ${remCalc(22)};
        }
      }
    `}</style>
  </ul>
)