import React from 'react';

import Button from './Button/Button';

import '../../assets/sass/main.scss';
import avatar from '../../assets/img/avatar_zeigor_crop.jpg';
import card1 from '../../assets/img/card-1.jpg';
import instagramIcon from '../../assets/icons/instagram.svg';
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

const App = () => {
  return (
    <>
      <div className='container'>
        <nav className='navigation'>
          <ul className='menu'>
            <li className='menu__item'>
              <Button>Home</Button>
            </li>
            <li className='menu__item'>
              <Button>About</Button>
            </li>
            <li className='menu__item'>
              <Button>Contact</Button>
            </li>
          </ul>
        </nav>
        <main className='home'>
          <div className='intro'>
            <div className='intro__photo'>
              <figure className='avatar'>
                <img src={avatar} alt='Ze Igor' className='avatar__photo' />
              </figure>
            </div>
            <div className='personal'>
              <p className='personal__intro'>
                I am Ze Igor, a mix of Electrical Enginneer and Web Designer,
                based in the city of Recife-Brazil.
              </p>
              <p className='personal__intro'>
                With my heart divided in two, I am passionate about embedded
                systems software development (EE side) and being creative while
                designing web lovely pages for my clients as a web developer.
              </p>
              <p className='personal__intro'>
                Welcome to my online portfolio! Here is the collection of my
                selected web design work.
              </p>
              <p className='personal__intro'>
                Please feel free to explore and tell me what you think about it!
              </p>
            </div>
          </div>

          <div className='portifolio'>
            <div className='card'>
              <a href='#' className='card__photo-box'>
                <img src={card1} alt='Project 1' className='card__photo' />
              </a>
              <div className='card__caption'>
                <a href='#' className='card__name'>
                  Unsplash Website
                </a>
                <span className='card__author'>
                  <i>made with </i>
                </span>
              </div>
            </div>
            <div className='card'>
              <div className='card__coming'>
                <p>Coming soon ...</p>
              </div>
              <div className='card__caption'>
                <a href='#' className='card__name'>
                  Coming soon...
                </a>
                <span className='card__author'>
                  <i>with </i>
                </span>
              </div>
            </div>
            <div className='card'>
              <div className='card__coming'>
                <p>Coming soon ...</p>
              </div>
              <div className='card__caption'>
                <a href='#' className='card__name'>
                  Coming soon...
                </a>
                <span className='card__author'>
                  <i>with </i>
                </span>
              </div>
            </div>
            <div className='card'>
              <div className='card__coming'>
                <p>Coming soon ...</p>
              </div>
              <div className='card__caption'>
                <a href='#' className='card__name'>
                  Coming soon...
                </a>
                <span className='card__author'>
                  <i>with </i>
                </span>
              </div>
            </div>
            <div className='card'>
              <div className='card__coming'>
                <p>Coming soon ...</p>
              </div>
              <div className='card__caption'>
                <a href='#' className='card__name'>
                  Coming soon...
                </a>
                <span className='card__author'>
                  <i>with </i>
                </span>
              </div>
            </div>
            <div className='card'>
              <div className='card__coming'>
                <p>Coming soon ...</p>
              </div>
              <div className='card__caption'>
                <a href='#' className='card__name'>
                  Coming soon...
                </a>
                <span className='card__author'>
                  <i>with </i>
                </span>
              </div>
            </div>
          </div>
        </main>

        <footer className='footer'>
          <div className='footer__copyright'>
            <span className='line' />
            <span className='designer'>
              designed <i>by</i> Ze Igor
            </span>
            <span className='line' />
          </div>
          <div className='footer__social-media'>
            <a
              href='https://www.linkedin.com/in/jos%C3%A9-igor-clementino-ferreira-moreira-05a656145/'
              target='_blank'
            >
              <svg className='footer__icon footer__icon--linkedin'>
                <use xlinkHref={linkedinIcon} />
              </svg>
            </a>
            <a href='https://github.com/JoseIgor' target='_blank'>
              <svg className='footer__icon footer__icon--github'>
                <use xlinkHref={githubIcon} />
              </svg>
            </a>
            <a href='#'>
              <svg className='footer__icon footer__icon--instagram'>
                <use xlinkHref={instagramIcon} />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
