import css from './Header.module.css';
import vector from '../../images/vector.svg';

export const Header = () => {
  return (
    <header>
      <div className={css.container_header}>
        <div className={css.navigation}>
          <div className={css.logo}>LOGO</div>
          <nav>
            <ul className={css.list}>
              <li className={css.nav_item}>How it works</li>
              <li className={css.nav_item}>About</li>
              <li className={css.nav_item}>Instructions</li>
              <li className={css.nav_item}>Accounts</li>
              <li className={css.nav_item}>Platforms</li>
              <li className={css.nav_item}>Contact</li>
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
      </div>
    </header>
  );
};
