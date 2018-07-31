import React from 'react'
import { Link } from '../routes'
import { BLACK, BLUE, LIGHT_GRAY } from '../common/colors'
import { markdownToHtml } from '../common/markdown'
import { textStyles } from '../common/textStyles'
import { remCalc } from '../common/helperFunctions'
import breakpoints from '../common/breakpoints'
import NavToggle from '../components/navToggle'
import classNames from 'classnames'

export default class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  menuToggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { navLinks, contact, path } = this.props
    const navClasses = classNames({
      'nav': true,
      'is-toggled': this.state.open
    })

    return (
      <React.Fragment>
        <NavToggle onClick={() => this.menuToggle()} />
        <nav className={navClasses}>
          <div className='nav__close' onClick={() => this.menuToggle()}>
            <span></span>
            <span></span>
          </div>
          <svg className='nav__logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 383.14 35.28'><path d='M0 .67h5.93q2.94 6 6 11.93L17.75.67h5.93l-9 16.09v10.5H9.13v-10.5Q4.33 8.36 0 .67zM32.26 7.69a8.76 8.76 0 0 1 7.32 3.32 10.55 10.55 0 0 1 2.19 6.76 9.66 9.66 0 0 1-3.24 7.56 9.36 9.36 0 0 1-13.25-.67 10 10 0 0 1-2.52-6.89 10.19 10.19 0 0 1 2.81-7.48 9 9 0 0 1 6.69-2.6zm0 16.13q4.08 0 4.08-6.05 0-6.3-4.08-6.3t-4.08 6.3q0 6.05 4.08 6.05zM58.68 25.08a6.94 6.94 0 0 1-5.77 2.68q-3.62 0-5.15-1.86t-1.53-6.28V8.16h5.19v10a7.68 7.68 0 0 0 .76 4 2.87 2.87 0 0 0 2.61 1.16 4.83 4.83 0 0 0 1.81-.42 2.2 2.2 0 0 0 1.21-.89V8.16h5.3v19.1h-3.93l-.46-2.18zM73.99 10.04a6.65 6.65 0 0 1 2.52-1.66 8.44 8.44 0 0 1 3.2-.69q3.61 0 5.23 2t1.62 6.39v11.18h-5.34v-11q0-4.1-3.66-4.1a5.49 5.49 0 0 0-2 .4 3.19 3.19 0 0 0-1.43.9v13.8h-5.3V8.16h4.5c.14.73.28 1.35.42 1.85zM104.19 24.95a6.06 6.06 0 0 1-5.34 2.81 7.76 7.76 0 0 1-6.52-3 10 10 0 0 1-2-6.38c0-3.67 1.06-6.5 3.2-8.49a8.25 8.25 0 0 1 5.76-2.22 7.63 7.63 0 0 1 4.5 1.3c.81.56 1.22 1 1.22 1.26l.41-2.07h4.08v17.1c0 3.22-.8 5.69-2.4 7.43a8.67 8.67 0 0 1-6.68 2.59 11.3 11.3 0 0 1-7.86-3l1.34-2.69a10.28 10.28 0 0 0 5.76 1.68q4.53-.02 4.53-6.32zm0-10.29a3.49 3.49 0 0 0-1.29-2.25 3.7 3.7 0 0 0-2.46-.94 4 4 0 0 0-3.36 1.69 7.38 7.38 0 0 0-1.26 4.53c0 4.18 1.37 6.26 4.12 6.26a4 4 0 0 0 3-1.32 4.39 4.39 0 0 0 1.26-3.13zM125.18 27.26V.67h17.41v4.41h-11.9v6.3h9.92v4.41h-9.92v11.47zM145.24 3.32a3.25 3.25 0 0 1 .94-2.33 3 3 0 0 1 2.26-1 3.25 3.25 0 0 1 2.37 1 3.16 3.16 0 0 1 1 2.35 3.19 3.19 0 0 1-.95 2.39 3.29 3.29 0 0 1-2.41.93 3.06 3.06 0 0 1-2.3-1 3.3 3.3 0 0 1-.91-2.34zm6 4.87v19.07h-5.34V8.16zM161.81 10.04a6.62 6.62 0 0 1 2.53-1.66 8.39 8.39 0 0 1 3.19-.69q3.62 0 5.24 2t1.65 6.36v11.21h-5.34v-11q-.03-4.1-3.66-4.1a5.5 5.5 0 0 0-2 .4 3.25 3.25 0 0 0-1.43.9v13.8h-5.3V8.16h4.5c.14.73.28 1.35.42 1.85zM185.03 10.04a6.65 6.65 0 0 1 2.52-1.66 8.44 8.44 0 0 1 3.2-.69q3.61 0 5.24 2t1.62 6.39v11.18h-5.35v-11q0-4.12-3.66-4.12a5.49 5.49 0 0 0-2 .4 3.25 3.25 0 0 0-1.43.9v13.82h-5.3V8.16h4.55c.14.73.28 1.35.42 1.85zM202.27 3.32a3.26 3.26 0 0 1 1-2.33 3 3 0 0 1 2.25-1 3.26 3.26 0 0 1 2.38 1 3.16 3.16 0 0 1 1 2.35 3.19 3.19 0 0 1-.95 2.39 3.31 3.31 0 0 1-2.42.93 3 3 0 0 1-2.29-1 3.27 3.27 0 0 1-.97-2.34zm6 4.87v19.07h-5.35V8.16zM224.86 12.81a8.46 8.46 0 0 0-4.71-1.34c-1.35 0-2 .57-2 1.72s.91 1.82 2.74 2.27a11.85 11.85 0 0 1 4.62 1.89 5.63 5.63 0 0 1 1.77 4.53 5.29 5.29 0 0 1-1.94 4.28 7.79 7.79 0 0 1-5.15 1.59 11.76 11.76 0 0 1-7.77-2.59l2-2.94a8.23 8.23 0 0 0 5.26 1.72 3.06 3.06 0 0 0 2-.59 1.86 1.86 0 0 0 .76-1.55c0-1.18-1-1.95-3-2.31q-6.39-1.21-6.39-6.22a5 5 0 0 1 2-4 7.49 7.49 0 0 1 4.9-1.59 10.93 10.93 0 0 1 6.94 2.31zM231.72 3.07l5.3-2.91v10.3a5.4 5.4 0 0 1 2.77-2.23 6.76 6.76 0 0 1 2.61-.58q3.66 0 5.32 2t1.7 6.4v11.21h-5.3v-11c0-2.75-1.17-4.12-3.53-4.12-1.71 0-2.89.48-3.53 1.43v13.69h-5.3zM265.49.72a32.29 32.29 0 0 1 7.28-.56q7.18 0 11 4.2a13.34 13.34 0 0 1 3.24 9.32q0 7.18-4.13 10.8-3.75 3.28-10.46 3.28a36.9 36.9 0 0 1-6.94-.54zM271 23.23a8.87 8.87 0 0 0 2.11.21q8.12 0 8.11-9.58c0-3.16-.89-5.58-2.69-7.26a7.85 7.85 0 0 0-5.55-2 9.74 9.74 0 0 0-2 .21zM309.2 19.45h-13.13a4.72 4.72 0 0 0 1.58 3.21 4.77 4.77 0 0 0 3.34 1.28 11.66 11.66 0 0 0 5.72-1.68l1.35 2.82a11 11 0 0 1-7.57 2.68 10.23 10.23 0 0 1-7.62-2.77 9.72 9.72 0 0 1-2.6-7.18 10.06 10.06 0 0 1 2.94-7.43 9 9 0 0 1 6.73-2.69 8.65 8.65 0 0 1 7.07 3.06 10.16 10.16 0 0 1 2.19 6.77zm-13.42-3.91h8.12q-.23-4.11-4-4.11t-4.12 4.11zM324.8 12.81a8.46 8.46 0 0 0-4.71-1.34c-1.35 0-2 .57-2 1.72s.91 1.82 2.73 2.27a11.84 11.84 0 0 1 4.6 1.89 5.63 5.63 0 0 1 1.77 4.53 5.29 5.29 0 0 1-1.91 4.28 7.79 7.79 0 0 1-5.15 1.59 11.72 11.72 0 0 1-7.71-2.59l1.94-2.94a8.2 8.2 0 0 0 5.25 1.72 3.07 3.07 0 0 0 2-.59 1.86 1.86 0 0 0 .76-1.55c0-1.18-1-1.95-3-2.31q-6.39-1.21-6.39-6.22a5 5 0 0 1 2-4 7.53 7.53 0 0 1 4.9-1.59 10.89 10.89 0 0 1 6.94 2.31zM330.81 3.32a3.26 3.26 0 0 1 .95-2.33 3 3 0 0 1 2.25-1 3.26 3.26 0 0 1 2.38 1 3.16 3.16 0 0 1 1 2.35 3.19 3.19 0 0 1-.97 2.37 3.31 3.31 0 0 1-2.42.93 3 3 0 0 1-2.29-1 3.31 3.31 0 0 1-.9-2.32zm6 4.87v19.07h-5.39V8.16zM354.42 24.95a6.05 6.05 0 0 1-5.34 2.81 7.76 7.76 0 0 1-6.52-3 10 10 0 0 1-2-6.38q0-5.5 3.2-8.49a8.25 8.25 0 0 1 5.76-2.22 7.59 7.59 0 0 1 4.5 1.3c.81.56 1.22 1 1.22 1.26l.42-2.06h4.08v17.1c0 3.22-.8 5.69-2.4 7.43a8.67 8.67 0 0 1-6.73 2.56 11.3 11.3 0 0 1-7.86-3l1.34-2.69a10.29 10.29 0 0 0 5.77 1.68c2.99 0 4.56-2.09 4.56-6.3zm0-10.29a3.47 3.47 0 0 0-1.28-2.25 3.74 3.74 0 0 0-2.47-.94 4 4 0 0 0-3.41 1.69 7.38 7.38 0 0 0-1.26 4.53c0 4.18 1.37 6.26 4.12 6.26a4 4 0 0 0 3-1.32 4.39 4.39 0 0 0 1.3-3.14zM370.56 10.04a6.62 6.62 0 0 1 2.53-1.66 8.39 8.39 0 0 1 3.19-.69c2.42 0 4.16.66 5.24 2s1.62 3.45 1.62 6.39v11.18h-5.34v-11q0-4.12-3.66-4.12a5.5 5.5 0 0 0-2 .4 3.25 3.25 0 0 0-1.43.9v13.82h-5.29V8.16h4.5c.14.73.28 1.35.42 1.85z' fill='#231f20' /></svg>
          <ul className='nav__links'>
            {navLinks.map((navigationLink, index) => (
              <li key={index}>
                <Link to={navigationLink.fields.path}>
                  <a className={`${textStyles.navLinks.className} ${path == navigationLink.fields.path ? 'is-active' : ''}`}>{navigationLink.fields.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div dangerouslySetInnerHTML={{__html: markdownToHtml(contact)}} className={`nav__contact ${textStyles.contactCopy.className}`} />
        </nav>

        <style jsx>{`
          .nav {
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 10%;  
            background: ${LIGHT_GRAY};
            transform: translateX(101%);
            transition: transform 0.52s;
          }

          .nav.is-toggled {
            transform: translateX(0%);
          }

          .nav__close {
            position: absolute;
            top: 43px;
            right: 7.2%;
            width: 40px;
            height: 40px;
            cursor: pointer;
          }

          .nav__close span {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            width: 20px;
            height: 2px;
            background: ${BLACK};
            transform-origin: center;
            transition: background 0.12s ease-in;
          }

          .nav__close span:nth-child(1) {
            transform: translate(-50%,-50%) rotate(45deg);
          }
          
          .nav__close span:nth-child(2) {
            transform: translate(-50%,-50%) rotate(-45deg);
          }

          .nav__close:hover span {
            background: ${BLUE};
          }

          .nav__logo {
            display: block;
            max-width: 100%;
            width: 239px;
            height: 22px;
            margin: 0 0 ${remCalc(32)} 0;
          }

          .nav__links {
            list-style: none;
            margin: 0 0 ${remCalc(32)} 0;
            padding: 0;
          }

          .nav__links li {
            margin-bottom: ${remCalc(20)};
          }

          .nav__links a {
            color: ${BLACK};
            transition: color 0.12s ease-in;
          }

          .nav__links a.is-active {
            color: ${BLUE};
          }

          .nav__links a:hover {
            color: ${BLUE};
            text-decoration: none;
          }

          :global(.nav__contact p) {
            line-height: 2;
          }

          :global(.nav__contact a) {
            color: ${BLACK};
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.medium}) {
            .nav {
              padding: ${remCalc(130)} 17% 10% 17%;
            }

            .nav__logo {
              width: 287px;
              height: 26px;
              margin: 0 0 ${remCalc(60)} 0;
            }

            .nav__links {
              list-style: none;
              margin: 0 0 ${remCalc(90)} 0;
              padding: 0;
            }

            .nav__links li {
              margin-bottom: ${remCalc(28)};
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.large}) {
            .nav,
            .nav.is-toggled {
              position: absolute;
              top: ${remCalc(32)};
              left: 2.5%;
              width: auto;
              height: auto;
              padding: 0;
              margin: 0;
              transform: translate(0);
              background: transparent;
            }

            .nav__logo {
              display: none;
            }

            .nav__close {
              display: none;
            }

            :globla(.nav__contact p) {
              display: none;
            }

            .nav__links {
              margin: 0;
            }

            .nav__links li {
              display: inline-block;
              margin-right: 1rem;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xlarge}) {
            .nav,
            .nav.is-toggled {
              top: ${remCalc(64)};
              left: ${remCalc(32)};
            }

            .nav__links li {
              margin-right: 2.5rem;
            }
          }
        `}</style>

        <style jsx>{`
          @media screen and (min-width: ${breakpoints.xxlarge}) {
            .nav,
            .nav.is-toggled {
              top: ${remCalc(80)};
              left: ${remCalc(64)};
            }

            .nav__links li {
              margin-right: 3rem;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}