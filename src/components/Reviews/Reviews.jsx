import css from './Reviews.module.css';
import sliderLeft from '../../images/slider left.svg';
import sliderRight from '../../images/slider right.svg';
import reviewer from '../../images/reviewer.png';
import quotes from '../../images/quotes.png';
import React, { useState } from 'react';

export const Reviews = () => {
  const [counter, setCounter] = useState(1);
  const handleSliderLeftClick = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const handleSliderRightClick = () => {
    if (counter < 4) {
      setCounter(prevCounter => prevCounter + 1);
    }
  };

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
            <button className={`${css.buttons2} ${css.leftBtn}`}>
              <img
                src={sliderLeft}
                alt="slider left"
                width={24}
                onClick={handleSliderLeftClick}
              />
            </button>
            <div className={css.slider}>
              <button className={css.buttons}>
                <img
                  src={sliderLeft}
                  alt="slider left"
                  width={24}
                  onClick={handleSliderLeftClick}
                />
              </button>
              <button className={css.buttons}>
                <img
                  src={sliderRight}
                  alt="slider right"
                  width={24}
                  onClick={handleSliderRightClick}
                />
              </button>
            </div>
          </div>
          <div className={css.reviewer}>
            <div className={css.person}>
              <div className={css.avatar}>
                <img src={reviewer} alt="reviewer" width={73} />
              </div>
              <div>
                <p className={css.name}>Albert Abello</p>
                <p className={css.position}>Director of Growth</p>
              </div>
            </div>
            <div className={css.quotes}>
              <img src={quotes} alt="quotes" width={33} height={27} />
            </div>
            <p className={css.text}>
              This magical product actually works! It has radically{' '}
              <br className={css.transfer} />
              changed the way we build our audiences.{' '}
              <br className={css.transfer} /> Increasing new customer sales by
              6x in our most <br className={css.transfer} /> mature market.
            </p>
            <div className={css.numbers}>
              <span className={css.counter_first}>0{counter} </span>
              <span className={css.counter_second}>/ 04</span>
            </div>
          </div>
          <button className={`${css.buttons2} ${css.rightBtn}`}>
            <img
              src={sliderRight}
              alt="slider right"
              width={24}
              onClick={handleSliderRightClick}
            />
          </button>
        </div>
      </div>
    </>
  );
};
