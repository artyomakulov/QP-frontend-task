import css from './Header.module.css';
import vector from '../../images/vector.svg';
import burger from '../../images/burger.svg';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className={css.container_header}>
        <div className={css.navigation}>
          <div className={css.logo}>
            <a href="/" className={css.link}>
              LOGO
            </a>
          </div>
          <nav>
            <ul className={css.list}>
              <li className={css.nav_item}>
                <a href="/" className={css.link}>
                  How it works
                </a>
              </li>
              <li className={css.nav_item}>
                <a href="/" className={css.link}>
                  About
                </a>
              </li>
              <li className={css.nav_item}>
                <a href="/" className={css.link}>
                  Instructions
                </a>
              </li>
              <li className={css.nav_item}>
                <a href="/" className={css.link}>
                  Accounts
                </a>
              </li>
              <li className={css.nav_item}>
                <a href="/" className={css.link}>
                  Platforms
                </a>
              </li>
              <li className={css.nav_item}>
                <a href="/" className={css.link}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={css.buttons}>
          <button className={css.button_lang}>
            EN
            <img src={vector} alt="vector" width={20} />
          </button>
          <button className={css.button_sign}>Sign in for free</button>
        </div>
        <div className={css.burger_container}>
          <button className={css.burger} onClick={toggleMenu}>
            <img src={burger} alt="burger menu" width={24} />
          </button>
          {isMenuOpen && (
            <div className={css.mobileMenu}>
              <nav>
                <ul className={css.list}>
                  <li className={css.nav_item}>
                    <a href="/" className={css.link}>
                      How it works
                    </a>
                  </li>
                  <li className={css.nav_item}>
                    <a href="/" className={css.link}>
                      About
                    </a>
                  </li>
                  <li className={css.nav_item}>
                    <a href="/" className={css.link}>
                      Instructions
                    </a>
                  </li>
                  <li className={css.nav_item}>
                    <a href="/" className={css.link}>
                      Accounts
                    </a>
                  </li>
                  <li className={css.nav_item}>
                    <a href="/" className={css.link}>
                      Platforms
                    </a>
                  </li>
                  <li className={css.nav_item}>
                    <a href="/" className={css.link}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
