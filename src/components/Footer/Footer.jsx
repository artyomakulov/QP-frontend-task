import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.container_footer}>
      <div>
        <div className={css.container}>
          <div className={css.logo}>
            <a href="/" className={css.link}>
              LOGO
            </a>
          </div>
          <div className={css.text_block}>
            <h3 className={css.title}>Information and high risk warning:</h3>
            <p className={css.text}>
              Trading with foreign exchange (FX), contract for differences
              (CFDs) and precious metals carries a high level of risk that may
              not be suitable for all investors. Leverage creates additional
              risk and loss exposure. Before you decide to trade foreign
              exchange or contract for differences, carefully consider your
              investment objectives, experience level, and risk tolerance.
            </p>
          </div>
          <div className={css.text_block}>
            <h3 className={css.title}>Legal disclaimer:</h3>
            <p className={css.text}>
              Forex trading entails significant risks and is not appropriate for
              all investors. The possibility of incurring substantial losses
              should be taken into account. It is therefore important to
              understand the possible consequences of investing. Traders should
              weigh their earning potential against the risks involved and act
              accordingly. Interactive Trade Ltd operating under brand and using
              domenLink domain within the European Economic Area.
            </p>
          </div>
          <div>
            <nav>
              <ul className={css.list}>
                <li className={css.list_item}>
                  <a href="/" className={css.link}>
                    About us
                  </a>
                </li>
                <li className={css.list_item}>
                  <a href="/" className={css.link}>
                    Instructions
                  </a>
                </li>
                <li className={css.list_item}>
                  <a href="/" className={css.link}>
                    Platforms
                  </a>
                </li>
                <li className={css.list_item}>
                  <a href="/" className={css.link}>
                    Contact Us
                  </a>
                </li>
                <li className={css.list_item}>
                  <a href="/" className={css.link}>
                    Sign in
                  </a>
                </li>
                <li className={css.list_item}>
                  <a href="/" className={css.link}>
                    Sign up for free
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={css.lower}>
        <p className={css.lower_item}>Copyright 2020, All Right Reserved</p>
        <p className={css.lower_item}>Terms and Conditions</p>
        <p className={css.lower_item}>Privacy Policy</p>
        <p className={css.lower_item}>Risk Warnings</p>
        <p className={css.lower_item}>Anti-Money Laundering</p>
      </div>
    </footer>
  );
};
