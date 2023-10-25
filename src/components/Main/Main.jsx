import css from './Main.module.css';

export const Main = () => {
  return (
    <>
      <div className={css.container_main}>
        <div className={css.content}>
          <h2 className={css.title}>
            Getting Started Is <br />
            <span className={css.title_highlight}>Fast & Easy</span>
          </h2>
          <ul className={css.list}>
            <li>
              <div className={css.item}>
                <div className={css.item_content}>
                  <p className={css.step}>01.</p>
                  <p className={css.step_title}>Register</p>
                  <p className={css.step_text}>
                    Complete the simple registration to get your trading
                    credentials.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.item_content}>
                <p className={css.step}>02.</p>
                <p className={css.step_title}>Verification</p>
                <p className={css.step_text}>
                  Big Invest is required to verify your identity, upload your
                  documents quickly and get approved in minutes.
                </p>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.item_content}>
                <p className={css.step}>03.</p>
                <p className={css.step_title}>Deposit funds</p>
                <p className={css.step_text}>
                  Big Invest accepts credit cards and bank wires. Just use the
                  secure deposit form and follow the steps.
                </p>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.item_content}>
                <p className={css.step}>04.</p>
                <p className={css.step_title}>Start Trading</p>
                <p className={css.step_text}>
                  Once your deposit has been credited, you can begin trading
                  instantly. In no time you will see profits rolling into your
                  account.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};