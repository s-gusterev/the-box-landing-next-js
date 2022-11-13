import React from 'react';
import { Logo } from '../../components';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container footer__container_position_top  container '>
        <div className='footer__contacts'>
          <ul className='footer__list'>
            <li className='footer__item'>
              <span className='footer__contacts-title'>Address: </span>
              <span className='footer__item-text'>
                6391 Elgin St. Celina, Delaware 10299
              </span>
            </li>
            <li className='footer__item'>
              <span className='footer__contacts-title'>Phone:</span>
              <a className='footer__link' href='tel:+8411022703'>
                +84 1102 2703
              </a>
            </li>
            <li className='footer__item'>
              <span className='footer__contacts-title'>Email:</span>
              <a className='footer__link' href='mailto:hello@thebox.com'>
                hello@thebox.com
              </a>
            </li>
          </ul>
          <Logo className='footer__logo' />
        </div>
        <div className='footer__contacts'>
          <h3 className='footer__contacts-title footer__contacts-title_margin_bottom'>
            Newsletter:
          </h3>
          <form className='footer__form' name='footer-form'>
            <input
              className='footer__input'
              type='email'
              name='footer-email'
              id='footer-email'
              placeholder='Your email here'
            />
            <button className='footer__submit' type='submit'>
              Subscribe
            </button>
          </form>
          <h3 className='footer__contacts-title footer__contacts-title_type_social footer__contacts-title_margin_bottom'>
            Social:
          </h3>
          <ul className='footer__list-social'>
            <li className='footer__item-social'>
              <a href='#' className='footer__link-social'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0 20.1117C0 30.055 7.22167 38.3233 16.6667 40V25.555H11.6667V20H16.6667V15.555C16.6667 10.555 19.8883 7.77833 24.445 7.77833C25.8883 7.77833 27.445 8 28.8883 8.22167V13.3333H26.3333C23.8883 13.3333 23.3333 14.555 23.3333 16.1117V20H28.6667L27.7783 25.555H23.3333V40C32.7783 38.3233 40 30.0567 40 20.1117C40 9.05 31 0 20 0C9 0 0 9.05 0 20.1117Z'
                    fill='#3D445C'
                  />
                </svg>
              </a>
            </li>
            <li className='footer__item-social'>
              <a href='#' className='footer__link-social'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_34_306)'>
                    <path
                      d='M20 0.799805C9.39599 0.799805 0.799988 9.39581 0.799988 19.9998C0.799988 30.6038 9.39599 39.1998 20 39.1998C30.604 39.1998 39.2 30.6038 39.2 19.9998C39.2 9.39581 30.604 0.799805 20 0.799805ZM15.3 27.9578H11.412V15.4458H15.3V27.9578ZM13.332 13.9098C12.104 13.9098 11.31 13.0398 11.31 11.9638C11.31 10.8658 12.128 10.0218 13.382 10.0218C14.636 10.0218 15.404 10.8658 15.428 11.9638C15.428 13.0398 14.636 13.9098 13.332 13.9098ZM29.5 27.9578H25.612V21.0238C25.612 19.4098 25.048 18.3138 23.642 18.3138C22.568 18.3138 21.93 19.0558 21.648 19.7698C21.544 20.0238 21.518 20.3838 21.518 20.7418V27.9558H17.628V19.4358C17.628 17.8738 17.578 16.5678 17.526 15.4438H20.904L21.082 17.1818H21.16C21.672 16.3658 22.926 15.1618 25.024 15.1618C27.582 15.1618 29.5 16.8758 29.5 20.5598V27.9578Z'
                      fill='#3D445C'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_34_306'>
                      <rect width='40' height='40' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li className='footer__item-social'>
              <a href='#' className='footer__link-social'>
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_34_308)'>
                    <path
                      d='M20 0.799805C9.39599 0.799805 0.799988 9.39581 0.799988 19.9998C0.799988 30.6038 9.39599 39.1998 20 39.1998C30.604 39.1998 39.2 30.6038 39.2 19.9998C39.2 9.39581 30.604 0.799805 20 0.799805ZM27.81 16.5278C27.818 16.6918 27.82 16.8558 27.82 17.0158C27.82 22.0158 24.018 27.7778 17.062 27.7778C15.0066 27.7812 12.9939 27.1909 11.266 26.0778C11.56 26.1138 11.862 26.1278 12.168 26.1278C13.94 26.1278 15.57 25.5258 16.864 24.5098C16.0754 24.4943 15.3113 24.2332 14.6782 23.7628C14.0451 23.2925 13.5745 22.6363 13.332 21.8858C13.8983 21.9935 14.4817 21.9709 15.038 21.8198C14.1821 21.6467 13.4124 21.183 12.8594 20.5071C12.3064 19.8313 12.0042 18.985 12.004 18.1118V18.0658C12.514 18.3478 13.098 18.5198 13.718 18.5398C12.9156 18.0057 12.3476 17.1851 12.1301 16.2461C11.9126 15.307 12.0621 14.3203 12.548 13.4878C13.4979 14.6558 14.6825 15.6113 16.0251 16.2924C17.3677 16.9736 18.8384 17.3651 20.342 17.4418C20.1508 16.6304 20.2331 15.7786 20.576 15.0188C20.9189 14.259 21.5032 13.6338 22.2381 13.2403C22.973 12.8469 23.8173 12.7073 24.6398 12.8431C25.4622 12.979 26.2167 13.3829 26.786 13.9918C27.6323 13.8244 28.4439 13.5139 29.186 13.0738C28.9039 13.9501 28.3133 14.6942 27.524 15.1678C28.2737 15.0775 29.0057 14.876 29.696 14.5698C29.189 15.3296 28.5503 15.9927 27.81 16.5278Z'
                      fill='#3D445C'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_34_308'>
                      <rect width='40' height='40' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__container footer__container_position_bottom'>
        <div className='container'>
          <p className='footer__copyright'>
            TheBox Company © 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
