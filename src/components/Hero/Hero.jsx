import css from './Hero.module.css';
import hero from '../../images/hero.png';
import mobImage from '../../images/imgMob.png'

export const Hero = () => {
  return (
    <div className={css.container_hero}>
      <div className={css.text_block}>
        <h1 className={css.title}>Trade everywhere.
        <br/> Invest here!</h1>
        <p className={css.text}>
          We provide only the best trading software. The trading terminal
          MetaTrader4 is the most popular and convenient platform for access to
          global exchanges. You can work anywhere.
        </p>
        <button className={css.button}>Start trading</button>
      </div>
      <div className={css.image}>
        <img src={hero} alt="background" />
      </div>
      <div className={css.mobImage}>
        <img src={mobImage} alt='background'/>
      </div>
    </div>
  );
};
