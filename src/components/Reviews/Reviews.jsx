import css from './Reviews.module.css';
import sliderLeft from '../../images/slider left.svg';
import sliderRight from '../../images/slider right.svg';
import reviewer from '../../images/reviewer.png';
import quotes from '../../images/quotes.png';

export const Reviews = () => {
  return (
    <>
      <div className={css.container_review}>
        <div className={css.container}>
          <div>
            <h2 className={css.title_hidden}>Reviews</h2>
            <h2 className={css.title}>
              People love Big <br />
              <span className={css.title_highlight}>Invest</span>
            </h2>
            <div className={css.slider}>
              <button className={css.button}>
                <img src={sliderLeft} alt="slider left" width={24} />
              </button>
              <button className={css.button}>
                <img src={sliderRight} alt="slider right" width={24} />
              </button>
            </div>
          </div>
          <div className={css.reviewer}>
            <div className={css.quotes}>
              <img src={quotes} alt="quotes" width={33} height={27} />
            </div>
            <div className={css.person}>
              <div className={css.avatar}>
                <img src={reviewer} alt="reviewer" width={73} />
              </div>
              <div>
                <p className={css.name}>Albert Abello</p>
                <p className={css.position}>Director of Growth</p>
              </div>
            </div>
            <p className={css.text}>
              This magical product actually works! It has radically <br />
              changed the way we build our audiences. <br /> Increasing new
              customer sales by 6x in our most <br /> mature market.
            </p>

            <div>
              <span className={css.counter_first}>01 </span>
              <span className={css.counter_second}>/ 04</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
